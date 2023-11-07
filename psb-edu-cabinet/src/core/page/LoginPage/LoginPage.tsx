import React, { FC } from "react"
import "./LoginPage.scss"
import { Button, Card, Div, FormItem, FormLayout, Input, Title } from "@vkontakte/vkui"
import { UserInfo, useLoginMutation } from "../../store/api/auth-api";

const LoginPage: FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [login, { isLoading: isLoadingLogin, isSuccess: isSuccessLogin, isError: isErrorLoading, error: errorLogin }] = useLoginMutation();
    function onLoginClick() {
        const body: UserInfo = {
            email, password
        }
        login(body)
    }
    return (<div className="login-page-container">
        <Card className="center-message" mode="outline-tint">
            <Div className="login-modal" >
                <Title className="title" level="1" >
                    Вход
                </Title>
                <FormLayout>
                    <FormItem className="form"
                        htmlFor="email"
                        top="Логин"
                        status={email ? 'valid' : 'error'}
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
            </Div>
        </Card>
    </div>)
}

export default LoginPage