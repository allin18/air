import React, {useState, useEffect, useImperativeHandle, forwardRef} from 'react';

import {Modal, Button} from '@arco-design/web-react';
import Draggable from 'react-draggable';
import {createGlobalStyle} from 'styled-components';
import {Checkbox} from '@arco-design/web-react';
import {Input} from '@arco-design/web-react';
import {IconCaretDown} from '@arco-design/web-react/icon';

const GlobalStyle = createGlobalStyle`
    /* 这里写你的全局CSS */
    .LoginModal {
        .arco-modal-content {
            padding: 0;
            width: 100%;
            height: 100%;
        }

        .arco-checkbox{
            .arco-checkbox-mask {
                width: 15px;
                height: 15px;
                border: 2px solid var(--page-border-b2b2b2);
                border-radius: 4px;
                .arco-checkbox-mask-icon{
                    width: 13px;
                }
            }
            .arco-checkbox-text {
                margin-left: 5px;
                font-size: 13px;
            }
        }
        .arco-checkbox-checked{
            .arco-checkbox-mask{
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
`;

const LoginModal = forwardRef((props, ref) => {
    // 子组件的状态和逻辑...
    const [visible, setVisible] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);

    const [mode, setMode] = React.useState(1);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [code, setCode] = React.useState('');


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
                            }} onClick={()=>setVisible(false)}></span>
                        </div>
                        <div className='LoginModal-content' style={{height: 440, width: 360, margin: "auto"}}>
                            <h6 style={{height: 41}}></h6>
                            <Input
                                className={'ipt'}
                                placeholder='电子邮箱/手机号'
                            />
                            <h6 style={{height: 23}}></h6>
                            <Input.Password
                                className={'ipt-group'}
                                addAfter='?'
                                placeholder='密码'
                            />
                            <h6 style={{height: 8}}></h6>
                            <Checkbox>记住账号</Checkbox>
                            <h6 style={{height: 36}}></h6>
                            <button className={'b1'}>开始</button>
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
                            }} onClick={()=>setVisible(false)}></span>
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
                            <h6 style={{height: 30}}></h6>
                            <Input.Password
                                className={'ipt-group'}
                                placeholder='密码'
                                value={password}
                                onChange={(val) => setPassword(val)}
                            />
                            <h6 style={{height: 30}}></h6>
                            <button className={(email.length > 0 && password.length > 0) ? 'b1' :'disabled'}>创建账户</button>
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
                            }} onClick={()=>setVisible(false)}></span>
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
                            >创建账户</button>
                        </div>
                    </div>
                }
            </Modal>
        </>
    );
});

export default LoginModal;