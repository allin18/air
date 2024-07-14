import JSZip from "jszip";
import { saveAs } from 'file-saver';

// 文件大小
export function calculateFileSizeInMB(file) {
    if (!file) {
        return 0; // 如果文件对象不存在或为空，返回0
    }
    const fileSizeInBytes = file.size; // 获取文件大小（字节）
    const fileSizeInKB = fileSizeInBytes / 1024; // 转换为KB
    const fileSizeInMB = fileSizeInKB / 1024; // 转换为MB
    const fileSize = fileSizeInMB.toFixed(2); // 保留两位小数的MB值
    return Number(fileSize);
}

function mapToJson(map, space = 4) {
    // TODO 待实现space
    let spaceStr = '';
    if (space === 4) {
        spaceStr = '    '
    } else if (space === 2) {
        spaceStr = '  '
    }
    if (map instanceof Map) {
        let arr = Array.from(map.entries());
        let json = arr.reduce(function (acc, cur, idx) {
            acc += `${spaceStr}\"${cur[0]}\": \"${cur[1]}\"`;
            if (idx !== arr.length - 1) {
                acc += ',\n'
            }
            return acc;
        }, '');
        return `{\n${json}\n}`
    } else {
        throw 'need a map'
    }
}

export default class FileUtil {
    // 获取文件名
    static getFileName(name) {
        return name.substring(0, name.lastIndexOf("."))
    }

    // 获取 .后缀名
    static getExtension(name) {
        return name.substring(name.lastIndexOf("."))
    }

    // 只获取后缀名
    static getExtensionName(name) {
        return name.substring(name.lastIndexOf(".") + 1)
    }

    //重要! 如何使用 Chrome 应用程序 fileSystem 将 FileEntry 转换为标准 JavaScript File 对象
    static async getFile(fileEntry) {
        // 该FileEntry 文档确实在此处提供了指导：
        // 该FileSystemFileEntry文件系统API的接口表示在文件系统中的文件。它提供了描述文件属性的属性，以及file()创建可用于读取文件的 File 对象的方法。
        // 不幸的是，file()方法依赖于回调而不是 Promise，但我们可以将其包装起来，并使使用 API（和阅读代码）更容易：
        try {
            // 方式1 转 File   File接口基于Blob, 继承了Blob的功能,可以把File当成Blob的子类
            return await new Promise((resolve, reject) => fileEntry.file(resolve, reject));
            // 方式2 转 blob   Blob,英文是binary large object,就是大的二进制对象
            // return await new Promise((resolve, reject) => fileEntry.file((file)=>resolve(new Blob([file],{type: file.type})), reject));
        } catch (err) {
            console.log(err);
        }
    }

    static zipDownload(files) {
        // 初始化一个zip打包对象
        const zip = new JSZip();
        // // 创建一个被用来打包的名为Hello.txt的文件
        // zip.file("Hello.txt", "Hello World\n");
        // // 创建一个名为images的新的文件目录
        // var img = zip.folder("images");
        // // 这个images文件目录中创建一个base64数据为imgData的图像，图像名是smile.gif
        // img.file("smile.gif", imgData, {base64: true});
        for (const file in files) {
            // zip.file(file.name, imgData, {base64: true});
        }

        const time = new Date().toLocaleString(undefined, {hour12: false}).replace(/\/|:|\s/g, '-');
        // 把打包内容异步转成blob二进制格式
        zip.generateAsync({type: "blob"}).then(function (content) {
            // content就是blob数据，这里以example.zip名称下载
            // 使用了FileSaver.js
            saveAs(content, `air-download-${time}.zip`);
        });
    }

    static getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}