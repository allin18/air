import React, {useState, useEffect, useImperativeHandle, forwardRef} from 'react';

import {Modal, Button} from '@arco-design/web-react';
import Draggable from 'react-draggable';
import {createGlobalStyle} from 'styled-components';
import {Checkbox} from '@arco-design/web-react';
import {Input} from '@arco-design/web-react';
import {IconCaretDown} from '@arco-design/web-react/icon';
import {Message} from '@arco-design/web-react';

import {forgotPassword, login, register, updatePassword} from "../../util/http";
import {validateEmailOrPhone} from "../../util/validate";
import {CountdownTimer} from "../../util/timer";
import eventBus from "../../util/eventBus";

const GlobalStyle = createGlobalStyle`
    /* 这里写你的全局CSS */
    .LoginModal {
        .arco-modal-content {
            padding: 0;
            width: 100%;
            height: 100%;
        }

        .arco-checkbox {
            .arco-checkbox-mask {
                width: 15px;
                height: 15px;
                border: 2px solid var(--page-border-b2b2b2);
                border-radius: 4px;

                .arco-checkbox-mask-icon {
                    width: 13px;
                }
            }

            .arco-checkbox-text {
                margin-left: 5px;
                font-size: 13px;
            }
        }

        .arco-checkbox-checked {
            .arco-checkbox-mask {
                border: 0;
                background-color: var(--page-checkbox-000);
                padding-left: 1px;
                padding-bottom: 1px;
            }
        }

        .arco-input::placeholder {
            color: var(--page-border-b2b2b2);
        }

        .arco-input.phone::placeholder {
            color: var(--page-text-808080);
        }

        .ipt.arco-input {
            width: 270px;
            height: 38px;
            border-radius: 6px;
            border: 1px solid var(--page-border-b2b2b2);
            font-size: 15px;
            padding: 0 18px;
            outline: none;
            background-color: transparent;
        }

        .ipt-group {
            width: 270px;
            height: 38px;
            border-radius: 6px;

            .arco-input-group {
                width: 270px;
                height: 38px;
                border-radius: 6px;
                border: 1px solid var(--page-border-b2b2b2);

                .arco-input-inner-wrapper {
                    border: 0;
                    background-color: transparent;

                    .arco-input {
                        //width: 360px;
                        //height: 50px;
                        padding: 0 18px;
                        font-size: 15px;
                        outline: none !important;
                        //border-radius: 8px;
                        //border: 1px solid var(--page-border-b2b2b2);
                    }

                    .arco-input-group-suffix {
                        display: none;
                    }
                }

                .arco-input-group-addafter {
                    width: 50px;
                    background-color: transparent;
                    text-align: center;
                    font-size: 15px;
                    font-weight: bold;
                    border: 0;
                    border-left: 1px solid var(--page-border-b2b2b2);
                    cursor: pointer;
                    color: var(--page-input-icon);
                }
            }
        }

        .LoginModal-content-left-right {
            width: 270px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            line-height: 1;

            > span {
                font-size: 12px;
            }

            > span:hover {
                text-decoration: underline;
            }
        }

        .error-tips {
            font-size: 10px;
            padding: 0 18px;
        }

    }

    .LoginModal-title {
        background-color: var(--page-text-262626)
    }

    .LoginModal-content {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .LoginModal-content input.ipt {

    }

    .LoginModal-content button.b1 {
        width: 270px;
        height: 38px;
        border-radius: 6px;
        color: var(--page-text-FFF);
        background-color: var(--page-bg-000);
        font-size: 18px;
        cursor: pointer;
        border: 0;
    }

    .LoginModal-content button.b2 {
        width: 270px;
        height: 38px;
        border-radius: 6px;
        color: var(--page-bg-000);
        background-color: transparent;
        font-size: 18px;
        cursor: pointer;
        border: 2px solid var(--page-bg-000);
    }

    .LoginModal-content button.disabled {
        width: 270px;
        height: 38px;
        border-radius: 6px;
        color: var(--page-text-FFF);
        background-color: var(--page-btn-disabled);
        font-size: 18px;
        cursor: pointer;
        border: 0;
    }

    .LoginModal-content.reset-pwd {
        .reset-pwd-title {
            display: flex;
            flex-flow: column;
            align-items: center;
            color: #807e7e;
            font-size: 14px;
        }

        .reset-pwd-email {
            font-size: 15px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            line-height: 1;
        }

        .reset-pwd-icon {
            display: flex;
            justify-content: center;
        }

        .reset-pwd-code {
            display: flex;
            justify-content: center;

            > div {
                width: 83px;

                > input {
                    height: 30px;
                    background-color: var(--page-input-bg-code);
                    border-radius: 6px;
                    border: 1px solid #000000;
                    outline: none;
                    padding: 0 15px;
                    font-size: 15px;
                }

                > span {
                    display: block;
                    line-height: 1;
                    margin-top: 7px;
                    padding-left: 15px;
                    font-size: 12px;
                }
            }

            > span {
                width: 83px;
                height: 30px;
                background-color: var(--page-input-bg-code-btn-bg);
                border-radius: 8px;
                color: var(--page-text-808080);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                cursor: pointer;
            }
        }
    }

    .LoginModal-content.reset-pwd-next {
        display: flex;
        flex-flow: column;
        align-items: center;

        .reset-pwd-next-email {
            font-size: 15px;
            display: flex;
            justify-content: center;
        }

        .ipt {
            width: 270px;
            height: 38px;
            border-radius: 6px;
        }

        .ipt-group,
        .arco-input-group {
            width: 270px;
            height: 38px;
            border-radius: 6px;
        }

        .b1 {
            width: 270px;
            height: 38px;
            border-radius: 6px;
        }

        .disabled {
            width: 270px;
            height: 38px;
            border-radius: 6px;
            background-color: var(--page-btn-disabled);
        }
    }

    .LoginModal-content.reset-pwd-success {
        display: flex;
        flex-flow: column;
        align-items: center;

        .reset-pwd-success-title {
            display: flex;
            justify-content: center;
            line-height: 1;
            font-size: 22px;
        }

        .reset-pwd-next-email {
            display: flex;
            justify-content: center;
            line-height: 1;
            font-size: 15px;
        }

        .reset-pwd-success-icon {
            display: flex;
            justify-content: center;
        }

        .reset-pwd-success-content {
            display: flex;
            justify-content: center;
            line-height: 1;
            font-size: 15px;
        }

        .b1 {
            width: 270px;
            height: 38px;
            border-radius: 6px;
        }
    }
`;

const LoginModal = forwardRef((props, ref) => {
    // 子组件的状态和逻辑...
    const [visible, setVisible] = React.useState(false); // true false
    const [disabled, setDisabled] = React.useState(true);

    // 1 登录 2 创建账户 3 创建账户 4 发送验证码 5 重置密码
    const [mode, setMode] = React.useState(1);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [code, setCode] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [codeError, setCodeError] = React.useState('');
    const [codeButtonText, setCodeButtonText] = React.useState('发送验证码');
    const [codeCount, setCodeCount] = React.useState(new CountdownTimer(60));
    const [codeResult, setCodeResult] = React.useState(null);
    const [resetPwd, setResetPwd] = React.useState('');
    const [resetPwd2, setResetPwd2] = React.useState('');
    const [resetPwdSuccessCount, setResetPwdSuccessCount] = React.useState(3);

    useEffect(() => {
        const eventBusListener = (data) => {
            console.log('收到事件，数据为:', data);
            setMode(data);
            setVisible(true);
        };
        eventBus.on('login-popup', eventBusListener);
        return () => {
            // 在组件卸载时取消事件监听
            eventBus.off('login-popup', eventBusListener);
        };
    }, []);

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
        open(mode = 1) {
            setMode(mode);
            setVisible(true)

        },
        hide() {
            setVisible(false)
        },
    }));

    function messageError(content) {
        Message.error({
            content: content,
            duration: 3000,
        })
    }

    function messageInfo(content) {
        Message.info({
            content: content,
            duration: 3000,
        })
    }

    async function clickLogin() {
        if (validateEmailOrPhone(email)) {
            const res = await login(email, password);
            if (res.data !== null) {
                localStorage.setItem('user', res.data.user);
                setVisible(false);
            } else {
                messageError(res.errmsg)
            }
        } else {
            setEmailError('请输入正确的邮箱或手机号')
        }
    }

    async function clickRegister() {
        if (validateEmailOrPhone(email)) {
            const res = await register(email, password);
            if (res.data !== null) {
                setMode(1);
            } else {
                messageError(res.errmsg)
            }
        } else {
            setEmailError('请输入正确的邮箱或手机号')
        }

    }

    async function clickForgotPassword() {
        setMode(4);
        apiSendCode();
    }

    async function clickSendCode() {
        if (codeButtonText !== '发送验证码') {
            messageInfo('验证码已发送，请稍后再试');
            return;
        }
        apiSendCode();
    }

    async function apiSendCode() {
        setCodeButtonText('正在发送...');
        const {data, errmsg} = await forgotPassword(email);
        if (data != null) {
            setCodeResult(data.code)
            codeCount.onTick = (secondsRemaining) => {
                setCodeButtonText(`${secondsRemaining}s重新发送`);
            };
            codeCount.onComplete = () => {
                setCodeButtonText('发送验证码');
            };
            codeCount.start();
        } else {
            setCodeResult(null)
            messageError(errmsg)
        }
    }

    function changeCode(val) {
        setCode(val)
        if (codeResult != null) {
            if (val.length >= 6) {
                if (val !== codeResult) {
                    setCodeError('验证码错误');
                } else {
                    setCodeError('');
                    setMode(5)
                }
            }
        }
    }

    async function clickUpdatePassword() {
        if (resetPwd === resetPwd2) {
            const {data, errmsg} = await updatePassword(email, resetPwd);
            if (data != null) {
                messageInfo('重置密码成功');
                setMode(6);
                const cTimer = () => {
                    setTimeout(() => {
                        const c = resetPwdSuccessCount - 1;
                        if (c === 0) {
                            setMode(1);
                            return;
                        }
                        if (c > 0) {
                            setResetPwdSuccessCount(c);
                            cTimer();
                        }
                    }, 1000);
                }
            } else {
                messageError(errmsg);
            }
        } else {
            messageError('您输入的新密码不一致')
        }
    }

    return (
        <>
            <GlobalStyle/> {/* 在应用的最顶部引入全局样式 */}
            <Modal
                style={{width: 450, height: "auto"}}
                wrapClassName='LoginModal'
                visible={visible}
                title={null}
                footer={null}
                closable={false}
                autoFocus={false}
                onCancel={() => {
                    setVisible(false);
                }}
                // 以下是移动
                // onMouseOver={() => {
                //     disabled && setDisabled(false);
                // }}
                // onMouseOut={() => {
                //     !disabled && setDisabled(true);
                // }}
                // modalRender={(modal) => <Draggable disabled={disabled}>{modal}</Draggable>}
            >
                {
                    mode === 1 &&
                    <div>
                        <div className='LoginModal-title myCenter' style={{height: 60}}>
                            <h3 style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: 'var(--page-text-FFF)',
                            }}>通行证</h3>
                            <span style={{
                                position: "absolute",
                                top: 12,
                                right: 21,
                                width: 40,
                                height: 5,
                                borderRadius: 2.5,
                                backgroundColor: 'var(--page-modal-close)',
                                cursor: 'pointer',
                            }} onClick={() => setVisible(false)}></span>
                        </div>
                        <div className='LoginModal-content' style={{width: 450, height: 330, margin: "auto"}}>
                            <h6 style={{height: 41}}></h6>
                            <Input
                                className={'ipt'}
                                placeholder='电子邮箱/手机号'
                                value={email}
                                onChange={(val) => setEmail(val)}
                            />
                            <h6 style={{height: 23}}><span className={'error-tips'}>{emailError}</span></h6>
                            <Input.Password
                                className={'ipt-group'}
                                addAfter='?'
                                placeholder='密码'
                                value={password}
                                onChange={(val) => setPassword(val)}
                            />
                            <h6 style={{height: 8}}></h6>
                            <div className={'LoginModal-content-left-right'}>
                                <Checkbox>记住账号</Checkbox>
                                <span onClick={() => clickForgotPassword()}>重置密码</span>
                            </div>
                            <h6 style={{height: 36}}></h6>
                            <button className={'b1'} onClick={() => clickLogin()}>登录</button>
                            <h6 style={{height: 23}}></h6>
                            <button className={'b2'} onClick={() => setMode(2)}>注册</button>
                        </div>
                    </div>
                }
                {
                    mode === 2 &&
                    <div>
                        <div className='LoginModal-title myCenter' style={{height: 60}}>
                            <h3 style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: 'var(--page-text-FFF)',
                            }}>注册</h3>
                            <span style={{
                                position: "absolute",
                                top: 12,
                                right: 21,
                                width: 40,
                                height: 5,
                                borderRadius: 2.5,
                                backgroundColor: 'var(--page-modal-close)',
                                cursor: 'pointer',
                            }} onClick={() => setVisible(false)}></span>
                        </div>
                        <div className='LoginModal-content' style={{width: 450, height: 330, margin: "auto"}}>
                            <h6 style={{height: 41}}></h6>
                            <div className={'myCenter'} style={{
                                width: 270,
                                height: 38,
                                border: '1px solid var(--page-border-b2b2b2)',
                                borderRadius: 8,
                                fontSize: 15,
                                color: 'var(--page-text-808080)',
                                cursor: 'pointer',
                            }} onClick={() => setMode(3)}>
                                手机号注册
                            </div>
                            <h6 style={{height: 20}}></h6>
                            <span className={'myCenter'} style={{
                                fontSize: 15,
                                lineHeight: 1,
                                color: 'var(--page-text-b2b1b1)',
                            }}>或</span>
                            <h6 style={{height: 20}}></h6>
                            <Input
                                className={'ipt'}
                                placeholder='电子邮箱'
                                value={email}
                                onChange={(val) => setEmail(val)}
                            />
                            <h6 style={{height: 23}}><span className={'error-tips'}>{emailError}</span></h6>
                            <Input.Password
                                className={'ipt-group'}
                                placeholder='密码'
                                value={password}
                                onChange={(val) => setPassword(val)}
                            />
                            <h6 style={{height: 23}}></h6>
                            <button className={(email.length > 0 && password.length > 0) ? 'b1' : 'disabled'}
                                    onClick={() => clickRegister()}>创建账户
                            </button>
                        </div>
                    </div>
                }
                {
                    mode === 3 &&
                    <div>
                        <div className='LoginModal-title myCenter' style={{height: 60}}>
                            <h3 style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: 'var(--page-text-FFF)',
                            }}>注册</h3>
                            <span style={{
                                position: "absolute",
                                top: 12,
                                right: 21,
                                width: 40,
                                height: 5,
                                borderRadius: 2.5,
                                backgroundColor: 'var(--page-modal-close)',
                                cursor: 'pointer',
                            }} onClick={() => setVisible(false)}></span>
                        </div>
                        <div className='LoginModal-content' style={{width: 450, height: 330, margin: "auto"}}>
                            <h6 style={{height: 41}}></h6>
                            <div style={{position: 'relative'}}>
                                <Input className={'phone'} style={{
                                    width: 270,
                                    height: 38,
                                    backgroundColor: 'var(--page-input-bg-code)',
                                    borderRadius: 6,
                                    outline: 'none',
                                    paddingLeft: 90,
                                    fontSize: 15,
                                    border: '1px solid var(--page-border-b2b2b2)',
                                }}
                                       placeholder='手机号'
                                       value={phone}
                                       onChange={(val) => setPhone(val)}
                                />
                                <span className={'myCenter'} style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: 90,
                                    height: 38,
                                    fontSize: 15,
                                    color: 'var(--page-text-808080)'
                                }}>+86 <IconCaretDown style={{color: 'var(--page-text-808080)', marginLeft: 10}}/>
                                </span>
                            </div>
                            <h6 style={{height: 23}}></h6>
                            <div className={'myRow'} style={{justifyContent: "flex-start"}}>
                                <Input style={{
                                    width: 106,
                                    height: 38,
                                    backgroundColor: 'var(--page-input-bg-code)',
                                    borderRadius: 6,
                                    border: 0,
                                    outline: 'none',
                                    padding: "0 16px",
                                    fontSize: 15,
                                }}
                                       placeholder=''
                                       value={code}
                                       onChange={(val) => setCode(val)}
                                />
                                <h6 style={{width: 29}}></h6>
                                <span className={'myCenter'} style={{
                                    width: 106,
                                    height: 38,
                                    borderRadius: 6,
                                    fontSize: 15,
                                    color: phone.length > 0 ? 'var(--page-text-FFF)' : 'var(--page-text-808080)',
                                    backgroundColor: phone.length > 0 ? 'var(--page-text-000)' : 'var(--page-input-bg-code-btn-bg)',
                                }}>发送验证码</span>
                                <h6 style={{width: 29}}></h6>
                            </div>
                            <h6 style={{height: 23}}></h6>
                            <Input.Password
                                className={'ipt-group'}
                                placeholder='密码'
                                value={password}
                                onChange={(val) => setPassword(val)}
                            />
                            <h6 style={{height: 33}}></h6>
                            <Checkbox style={{lineHeight: 1}}>我已阅读并接受 用户协议 和 隐私政策</Checkbox>
                            <h6 style={{height: 11}}></h6>
                            <button
                                className={(phone.length > 0 && code.length > 0 && password.length > 0) ? 'b1' : 'disabled'}
                            >创建账户
                            </button>
                        </div>
                    </div>
                }
                {
                    mode === 4 &&
                    <div>
                        <div className='LoginModal-title myCenter' style={{height: 60}}>
                            <h3 style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: 'var(--page-text-FFF)',
                            }}>重置密码</h3>
                            <span style={{
                                position: "absolute",
                                top: 12,
                                right: 21,
                                width: 40,
                                height: 5,
                                borderRadius: 2.5,
                                backgroundColor: 'var(--page-modal-close)',
                                cursor: 'pointer',
                            }} onClick={() => setVisible(false)}></span>
                        </div>
                        <div className='LoginModal-content reset-pwd' style={{width: 450, height: 330, margin: "auto"}}>
                            <h6 style={{height: 33}}></h6>
                            <div className={'reset-pwd-title'}>
                                <span>请在您的收件箱中查找一封介绍如何</span>
                                <span>重置密码的电子邮件</span>
                            </div>
                            <h6 style={{height: 51}}></h6>
                            <div className={'reset-pwd-email'}>{email}</div>
                            <h6 style={{height: 40}}></h6>
                            <div className={'reset-pwd-icon'}>
                                <img className="" src="images/covert/icon_close.svg" alt="" height={37}/>
                            </div>
                            <h6 style={{height: 22}}></h6>
                            <div className={'reset-pwd-code'}>
                                <div>
                                    <Input placeholder=''
                                           value={code}
                                           onChange={(val) => changeCode(val)}
                                    />
                                    <span>{codeError}</span>
                                </div>
                                <h6 style={{width: 14}}></h6>
                                <span onClick={() => clickSendCode()}>{codeButtonText}</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    mode === 5 &&
                    <div>
                        <div className='LoginModal-title myCenter' style={{height: 60}}>
                            <h3 style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: 'var(--page-text-FFF)',
                            }}>重置密码</h3>
                            <span style={{
                                position: "absolute",
                                top: 12,
                                right: 21,
                                width: 40,
                                height: 5,
                                borderRadius: 2.5,
                                backgroundColor: 'var(--page-modal-close)',
                                cursor: 'pointer',
                            }} onClick={() => setVisible(false)}></span>
                        </div>
                        <div className='LoginModal-content reset-pwd-next'
                             style={{width: 450, height: 330, margin: "auto"}}>
                            <h6 style={{height: 33}}></h6>
                            <div className={'reset-pwd-next-email'}>{email}</div>
                            <h6 style={{height: 41}}></h6>
                            <Input
                                className={'ipt'}
                                placeholder='新密码'
                                value={resetPwd}
                                onChange={(val) => setResetPwd(val)}
                            />
                            <h6 style={{height: 23}}></h6>
                            <Input.Password
                                className={'ipt-group'}
                                placeholder='确认密码'
                                value={resetPwd2}
                                onChange={(val) => setResetPwd2(val)}
                            />
                            <h6 style={{height: 52}}></h6>
                            <button
                                className={(resetPwd.length > 0 && resetPwd2.length > 0) ? 'b1' : 'disabled'}
                                onClick={(resetPwd.length > 0 && resetPwd2.length > 0) ? () => clickUpdatePassword() : null}
                            >重置密码
                            </button>
                        </div>
                    </div>
                }
                {
                    mode === 6 &&
                    <div>
                        <div className='LoginModal-title myCenter' style={{height: 60}}>
                            <h3 style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: 'var(--page-text-FFF)',
                            }}>重置密码</h3>
                            <span style={{
                                position: "absolute",
                                top: 12,
                                right: 21,
                                width: 40,
                                height: 5,
                                borderRadius: 2.5,
                                backgroundColor: 'var(--page-modal-close)',
                                cursor: 'pointer',
                            }} onClick={() => setVisible(false)}></span>
                        </div>
                        <div className='LoginModal-content reset-pwd-success'
                             style={{width: 450, height: 330, margin: "auto"}}>
                            <h6 style={{height: 33}}></h6>
                            <div className={'reset-pwd-success-title'}>密码已更改</div>
                            <h6 style={{height: 20}}></h6>
                            <div className={'reset-pwd-success-email'}>{email}</div>
                            <h6 style={{height: 25}}></h6>
                            <div className={'reset-pwd-success-icon'}>
                                <img className="" src="images/covert/icon_close.svg" alt="" height={46}/>
                            </div>
                            <h6 style={{height: 26}}></h6>
                            <div className={'reset-pwd-success-content'}>{resetPwdSuccessCount}s后为您自动跳转</div>
                            <h6 style={{height: 38}}></h6>
                            <button className={'b1'} onClick={() => setMode(1)}>继续</button>
                        </div>
                    </div>
                }
            </Modal>
        </>
    );
});

export default LoginModal;