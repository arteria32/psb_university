import React, { FC, useEffect } from "react"
import "./LoginPage.scss"
import { Button, Card, Div, FormItem, FormLayout, Input, Link, Title } from "@vkontakte/vkui"
import { UserInfo, useLoginMutation } from "../../store/api/auth-api";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { initAuthInfo } from "../../store/slices/auth-slice";

const LoginPage: FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [login, loginResult] = useLoginMutation();
    function onLoginClick() {
        const body: UserInfo = {
            email, password
        }
        login(body)
    }
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('loginResult', loginResult);
        if (loginResult.isSuccess) {
            dispatch(initAuthInfo({
                name: loginResult?.originalArgs?.email || "-",
                token: (loginResult?.data as unknown as { token: string }).token || ""
            }))
            navigate("/")
        } else if (loginResult.isError) {
            alert(((loginResult?.error as FetchBaseQueryError).data as { message: string })["message"])
        }
    }, [loginResult])
    return (<div className="login-page-container">
        <Card className="center-message" mode="outline-tint">
            <Div className="login-modal" >
                <Title className="title" level="1" >
                    Вход
                </Title>
                <FormLayout>
                    <FormItem className="form"
                        htmlFor="email"
                        top="Email"
                        bottomId="email-type"
                    >
                        <Input
                            aria-labelledby="email-type"
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.currentTarget.value)}
                        />
                    </FormItem>
                    <FormItem top="Пароль" htmlFor="pass" className="form">
                        <Input id="pass" type="password" placeholder="Введите пароль" value={password}
                            onChange={(event) => setPassword(event.currentTarget.value)}

                        />
                    </FormItem>
                </FormLayout>
                <Button
                    appearance="accent-invariable"
                    size="l"
                    mode="primary"

                    disabled={email.length == 0 || password.length == 0}
                    onClick={() => onLoginClick()}
                >
                    Войти
                </Button>
                <Link href="./auth/register">Перейти к регистрации</Link>

            </Div>
        </Card>
    </div>)
}

export default LoginPage