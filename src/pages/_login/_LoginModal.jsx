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
            width: 360px;
            height: 50px;
            padding: 0 18px;
            font-size: 15px;
            outline: none;
            border-radius: 8px;
            border: 2px solid var(--page-border-b2b2b2);
            background-color: transparent;
        }

        .ipt-group {
            .arco-input-group {
                width: 360px;
                height: 50px;
                border-radius: 8px;
                border: 2px solid var(--page-border-b2b2b2);

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
                        //border: 2px solid var(--page-border-b2b2b2);
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
                    border-left: 2px solid var(--page-border-b2b2b2);
                    cursor: pointer;
                    color: var(--page-input-icon);
                }
            }
        }

        .LoginModal-content-left-right {
            display: flex;
            justify-content: space-between;
            cursor: pointer;
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

    }

    .LoginModal-content input.ipt {
    }

    .LoginModal-content button.b1 {
        border-radius: 8px;
        color: var(--page-text-FFF);
        background-color: var(--page-bg-000);
        width: 360px;
        height: 50px;
        font-size: 18px;
        cursor: pointer;
        border: 0;
    }

    .LoginModal-content button.b2 {
        border-radius: 8px;
        color: var(--page-bg-000);
        background-color: transparent;
        width: 360px;
        height: 50px;
        font-size: 18px;
        cursor: pointer;
        border: 2px solid var(--page-bg-000);
    }

    .LoginModal-content button.disabled {
        border-radius: 8px;
        color: var(--page-text-FFF);
        background-color: var(--page-btn-disabled);
        width: 360px;
        height: 50px;
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
`;

const LoginModal = forwardRef((props, ref) => {
    // 子组件的状态和逻辑...
    const [visible, setVisible] = React.useState(true); // true false
    const [disabled, setDisabled] = React.useState(true);

    // 1 登录 2 创建账户 3 创建账户 4 发送验证码 5 重置密码
    const [mode, setMode] = React.useState(4);
    const [email, setEmail] = React.useState('526443791@qq.com');
    const [password, setPassword] = React.useState('123456');
    const [phone, setPhone] = React.useState('');
    const [code, setCode] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [codeError, setCodeError] = React.useState('');
    const [codeButtonText, setCodeButtonText] = React.useState('发送验证码');
    const [codeCount, setCodeCount] = React.useState(new CountdownTimer(60));

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
            if (res.data === null) {
                messageError(res.errmsg)
            }
        } else {
            setEmailError('请输入正确的邮箱或手机号')
        }
    }

    async function clickRegister() {
        if (validateEmailOrPhone(email)) {
            const res = await register(email, password);
            if (res.data === null) {
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
        const {data, errmsg} = await forgotPassword(email);
        if (data != null) {
            codeCount.onTick = (secondsRemaining) => {
                setCodeButtonText(`${secondsRemaining}s重新发送`);
            };
            codeCount.onComplete = () => {
                setCodeButtonText(`发送验证码`);
            };
            codeCount.start();
        }else{
            messageError(errmsg)
        }
    }

    function clickUpdatePassword() {
        updatePassword(email, '654321');
    }

    return (
        <>
            <GlobalStyle/> {/* 在应用的最顶部引入全局样式 */}
            <Modal
                style={{width: 600, height: 520}}
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
                        <div className='LoginModal-title myCenter' style={{height: 80}}>
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
                        <div className='LoginModal-content' style={{height: 440, width: 360, margin: "auto"}}>
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
                        <div className='LoginModal-title myCenter' style={{height: 80}}>
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
                        <div className='LoginModal-content' style={{height: 440, width: 360, margin: "auto"}}>
                            <h6 style={{height: 41}}></h6>
                            <div className={'myCenter'} style={{
                                height: 50,
                                width: 360,
                                margin: "auto",
                                border: '2px solid var(--page-border-b2b2b2)',
                                borderRadius: 8,
                                fontSize: 15,
                                color: 'var(--page-text-808080)',
                                cursor: 'pointer',
                            }} onClick={() => setMode(3)}>
                                手机号注册
                            </div>
                            <h6 style={{height: 23}}></h6>
                            <span className={'myCenter'} style={{
                                fontSize: 15,
                                lineHeight: 1,
                                color: 'var(--page-text-b2b1b1)',
                            }}>或</span>
                            <h6 style={{height: 25}}></h6>
                            <Input
                                className={'ipt'}
                                placeholder='电子邮箱'
                                value={email}
                                onChange={(val) => setEmail(val)}
                            />
                            <h6 style={{height: 30}}><span className={'error-tips'}>{emailError}</span></h6>
                            <Input.Password
                                className={'ipt-group'}
                                placeholder='密码'
                                value={password}
                                onChange={(val) => setPassword(val)}
                            />
                            <h6 style={{height: 30}}></h6>
                            <button className={(email.length > 0 && password.length > 0) ? 'b1' : 'disabled'}
                                    onClick={() => clickRegister()}>创建账户
                            </button>
                        </div>
                    </div>
                }
                {
                    mode === 3 &&
                    <div>
                        <div className='LoginModal-title myCenter' style={{height: 80}}>
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
                        <div className='LoginModal-content' style={{height: 440, width: 360, margin: "auto"}}>
                            <h6 style={{height: 41}}></h6>
                            <div style={{position: 'relative'}}>
                                <Input className={'phone'} style={{
                                    width: 360,
                                    height: 50,
                                    backgroundColor: 'var(--page-input-bg-code)',
                                    borderRadius: 8,
                                    outline: 'none',
                                    paddingLeft: 120,
                                    fontSize: 15,
                                    border: '2px solid var(--page-border-b2b2b2)',
                                }}
                                       placeholder='手机号'
                                       value={phone}
                                       onChange={(val) => setPhone(val)}
                                />
                                <span className={'myCenter'} style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: 100,
                                    height: 50,
                                    fontSize: 15,
                                    color: 'var(--page-text-808080)'
                                }}>+86 <IconCaretDown style={{color: 'var(--page-text-808080)', marginLeft: 10}}/>
                                </span>
                            </div>
                            <h6 style={{height: 23}}></h6>
                            <div className={'myRow'} style={{justifyContent: "flex-start"}}>
                                <Input style={{
                                    width: 142,
                                    height: 50,
                                    backgroundColor: 'var(--page-input-bg-code)',
                                    borderRadius: 8,
                                    border: 0,
                                    outline: 'none',
                                    padding: "0 16px",
                                    fontSize: 15,
                                }}
                                       placeholder=''
                                       value={code}
                                       onChange={(val) => setCode(val)}
                                />
                                <h6 style={{width: 38}}></h6>
                                <span className={'myCenter'} style={{
                                    width: 142,
                                    height: 50,
                                    backgroundColor: 'var(--page-input-bg-code-btn-bg)',
                                    borderRadius: 8,
                                    fontSize: 15,
                                    color: 'var(--page-text-808080)'
                                }}>发送验证码</span>
                            </div>
                            <h6 style={{height: 23}}></h6>
                            <Input.Password
                                className={'ipt-group'}
                                placeholder='密码'
                                value={password}
                                onChange={(val) => setPassword(val)}
                            />
                            <h6 style={{height: 43}}></h6>
                            <Checkbox>我已阅读并接受 用户协议 和 隐私政策</Checkbox>
                            <h6 style={{height: 14}}></h6>
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
                        <div className='LoginModal-title myCenter' style={{height: 80}}>
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
                        <div className='LoginModal-content reset-pwd' style={{height: 440, width: 360, margin: "auto"}}>
                            <h6 style={{height: 33}}></h6>
                            <div className={'reset-pwd-title'}>
                                <span>请在您的收件箱中查找一封介绍如何</span>
                                <span>重置密码的电子邮件</span>
                            </div>
                            <h6 style={{height: 51}}></h6>
                            <div className={'reset-pwd-email'}>{email}</div>
                            <h6 style={{height: 39}}></h6>
                            <div className={'reset-pwd-icon'}>
                                <img className="" src="images/covert/icon_close.svg" alt="" height={37}/>
                            </div>
                            <h6 style={{height: 25}}></h6>
                            <div className={'reset-pwd-code'}>
                                <div>
                                    <Input placeholder=''
                                           value={code}
                                           onChange={(val) => setCode(val)}
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
                        <div className='LoginModal-title myCenter' style={{height: 80}}>
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
                        <div className='LoginModal-content' style={{height: 440, width: 360, margin: "auto"}}>
                            <h6 style={{height: 41}}></h6>
                            <Input
                                className={'ipt'}
                                placeholder='电子邮箱/手机号'
                                value={email}
                                onChange={(val) => setEmail(val)}
                            />
                            <h6 style={{height: 23}}></h6>
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
                                <span onClick={() => setMode(4)}>忘记密码？</span>
                            </div>
                            <h6 style={{height: 36}}></h6>
                            <button className={'b1'} onClick={() => clickLogin()}>登录</button>
                            <button className={'b1'} onClick={() => clickForgotPassword()}>忘记密码</button>
                            <button className={'b1'} onClick={() => clickUpdatePassword()}>修改密码</button>
                            <h6 style={{height: 23}}></h6>
                            <button className={'b2'} onClick={() => setMode(2)}>注册</button>
                        </div>
                    </div>
                }
            </Modal>
        </>
    );
});

export default LoginModal;