import {getUUID} from "./uuid";

// 扩展 Array.prototype 来添加 isNotEmpty 属性 对齐dart
if (!Object.getOwnPropertyDescriptor(Array.prototype, 'isNotEmpty')) {
    // 使用Object.defineProperty来定义getter而不定义setter
    Object.defineProperty(Array.prototype, 'isNotEmpty', {
        // getter函数
        get: function () {
            // 如果数组的长度大于0，则认为它不为空
            return this.length > 0;
        },
        // 不需要setter，所以这里不定义它
        // enumerable: false, // 可选，设置为false使该属性不在for...in循环中枚举
        // configurable: true, // 可选，设置为true允许该属性的描述符被再次修改，默认为true
    });
}
// 扩展 Array.prototype 来添加 removeAt 方法
if (!Array.prototype.removeAt) {
    Array.prototype.removeAt = function (index) {
        return this.splice(index, 1)[0]; // 从索引index开始，移除1个元素
    };
}
// 扩展 Array.prototype 来添加 addAll 方法
if (!Array.prototype.addAll) {
    Array.prototype.addAll = function (arr) {
        return this.concat(arr);
    };
}
// 扩展 Array.prototype 来添加 firstWhere 方法
if (!Array.prototype.firstWhere) {
    Array.prototype.firstWhere = function (predicate) {
        return this.find(predicate);
    };
}

// 扩展 Array.prototype 来添加 add 方法
if (!Array.prototype.add) {
    Array.prototype.add = function (predicate) {
        return this.push(predicate);
    };
}

// 扩展 Array.prototype 来添加 toList 方法
if (!Array.prototype.toList) {
    Array.prototype.toList = function () {
        return this;
    };
}
// 扩展 Array.prototype 来添加 removeWhere 方法
if (!Array.prototype.removeWhere) {
    Array.prototype.removeWhere = function(predicate) {
        // 使用filter方法的逆逻辑来移除元素
        // filter方法会返回所有使predicate返回true的元素的索引之外的元素
        // 然后我们用这些“剩余”的元素来替换原数组
        this.splice(0, this.length, ...this.filter(function(item, index, array) {
            return !predicate(item, index, array);
        }));
        // 注意：splice方法会改变原数组，并返回被移除的元素数组
        // 但在这个方法中，我们并不关心被移除的元素，所以我们不返回它
    };
}
// 扩展 Array.prototype 来添加 where 方法
if (!Array.prototype.where) {
    Array.prototype.where = function(predicate) {
        return this.filter(predicate);
    };
}

// 扩展 Array.prototype 来添加 first 属性 对齐dart
if (!Object.getOwnPropertyDescriptor(Array.prototype, 'first')) {
    // 使用Object.defineProperty来定义getter而不定义setter
    Object.defineProperty(Array.prototype, 'first', {
        get: function () {
            return this[0];
        },
    });
}

///
/// 任务队列开
///
export class Queues {
    /// 队列配置
    autoDownload = false; // 添加任务后 自动下载
    concurrencyCount = 1; // 并发数量

    /// 任务数量
    _totalTasks = []; // 全部任务
    _surplusTasks = []; // 剩余任务
    _successTasks = []; // 成功任务
    _failTasks = []; // 失败任务
    _currentTasks = []; // 当前任务
    // double get percent => ((_successTasks.length / _totalTasks.length) * 100).floorToDouble() / 100;

    stream = null; // 只支持监听一个 可能也不需要

    /// 下载全部任务 TODO 建议给手动操作 比如暂停后全部执行
    start() {
        /// 考虑是否需要考虑失败的情况 也可以不需要
        if (this._failTasks.isNotEmpty) {
            this._surplusTasks.addAll(this._failTasks);
            this._failTasks.clear();
        }
        this._executeQueue();
    }

    /// 下载某个任务 TODO
    startAt(taskId) {
        // 获取相关未下载任务
        var taskInfo = this._surplusTasks.firstWhere((e) => e.id === taskId);

        this._executeTask(taskInfo, false);
    }

    /// 重新开始 TODO
    restartAt(taskId) {
        // // ,  Function(T) callback
        // // 获取相关未下载任务
        // var taskInfo = _failTasks.firstWhere((e) => e.id == taskId);
        // var newT = taskInfo.resetTask();
        // _failTasks.removeWhere((element) => element.id == taskId);
        // _totalTasks.removeWhere((element) => element.id == taskId);
        // _totalTasks.add(newT);
        // // 回调子组件去渲染
        // // callback(newT);
        // if (onRestartTask != null) {
        //   onRestartTask!(newT);
        // }
        // _executeTask(newT, false);
    }

    /// 清除下载列表 TODO
    remove() {
        // vDownLoad.clear();
        // vFileList.clear();
    }

    /// 从所有任务里删除一个任务
    removeAt(taskId) {
        var task = this.getTask(taskId);
        task?.cancel();
        this._totalTasks.removeWhere((element) => element.id === taskId);
        this._failTasks.removeWhere((element) => element.id === taskId);
        this._successTasks.removeWhere((element) => element.id === taskId);
        this._surplusTasks.removeWhere((element) => element.id === taskId);
        this._currentTasks.removeWhere((element) => element.id === taskId);
        this._executeQueue();
        // notifyListeners();
        this._log();
    }

    /// 获取一个任务
    getTask(taskId) {
        var w = this._totalTasks.where((element) => element.id === taskId);
        return w.isNotEmpty ? w.first : null;
    }

    /// 检车任务是否存在
    // T? checkExistTask( taskId) {}

    /// 添加下载任务 可以自动执行任务
    addTask(task) {
        this._totalTasks.add(task);
        this._surplusTasks.add(task);
        if (this.autoDownload) {
            this._executeQueue();
        }
        this.stream && this.stream(this._totalTasks.length);
        this._log();
    }

    /// 添加多个下载任务 TODO
    addAllTask() {
    }

    /// 执行下载队列 主要的
    _executeQueue() {
        if (this._surplusTasks.isNotEmpty) {
            // 相差的数量
            var diffCount = this.concurrencyCount - this._currentTasks.length;
            for (var i = 0; i < diffCount; i++) {
                if (this._surplusTasks.isNotEmpty) {
                    // 删除第一个剩余任务
                    var task = this._surplusTasks.removeAt(0);
                    // 添加到当前任务
                    this._currentTasks.add(task);
                    // 添加刚删除的任务 到当前任务
                    this._executeTask(task, true);
                }
            }
        }
    }

    /// 执行一个任务
    _executeTask(task, isContinue) {
        // 开始任务
        task.start();
        // 监听任务结果 单个任务完成
        task.finish
            .then((value) => {
                if (value) {
                    this._successTasks.add(task); // 记录已经成功的任务
                    task.end();
                } else {
                    this._failTasks
                        .add(task); // 记录已经失败的任务
                    task
                        .error();
                }
                // 从当前任务 删除已经完成或已经失败的 留出位置
                this._currentTasks.removeWhere((element) => element.id === task.id);
                if (isContinue) {
                    this._executeQueue();
                }
                this._log();
            });
        this._log();
    }

    _log() {
        console.log(`
全部任务(${this._totalTasks.length}) ${this._totalTasks.map((e) => e.id).toList()}
\n成功任务(${this._successTasks.length}) ${this._successTasks.map((e) => e.id).toList()}
\n失败任务(${this._failTasks.length}) ${this._failTasks.map((e) => e.id).toList()}
\n剩余任务(${this._surplusTasks.length}) ${this._surplusTasks.map((e) => e.id).toList()}
\n当前任务(${this._currentTasks.length}) ${this._currentTasks.map((e) => e.id).toList()}
        `);
    }
}

export class Task {
    data = null;
    /// ============================================================= 特殊
    _resolve = null;
    startCallback = null;
    endCallback = null;
    constructor(data, startCallback, endCallback) {
        this.data = data;
        this.startCallback = startCallback;
        this.endCallback = endCallback;
        this._completer = new Promise((resolve, reject) => {
            this._resolve = resolve;
        });
    }
    /// ============================================================= 特殊end

    id = getUUID();
    // 所有任务完成 主动告诉任务完成 回调
    _completer;

    get finish() {
        return this._completer;
    }

    start() {
        this.startCallback && this.startCallback(this);
    };

    end() {
        this.endCallback && this.endCallback(this);
    };

    error() {
    };

    cancel() {
    };

    // __completer(result) {
    //     this._completer.
    //     // 防止过多进入此函数 比如进度 100% 发了两次
    //     if (!_completer.isCompleted) {
    //         _completer.complete(result);
    //     }
    // }

    successHandle() {
        // __completer(true);
        this._resolve && this._resolve(true);
    }

    failHandle() {
        // __completer(false)
        this._resolve && this._resolve(false);
    }
}