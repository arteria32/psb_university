import { Button, Card, Div, FormItem, FormLayout, Input, Title } from "@vkontakte/vkui";
import React, { FC } from "react";
import { UserFullInfo, useRegisterMutation } from "../../store/api/auth-api";
import "./RegisterPage.scss";

const RegisterPage: FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [register, { isLoading: isLoadingLogin, isSuccess: isSuccessLogin, isError: isErrorLoading, error: errorLogin }] = useRegisterMutation();
    function onRegisterClick() {
        const body: UserFullInfo = {
            email, password, name
        }
        register(body)
    }
    return (<div className="register-page-container">
        <Card className="center-message" mode="outline-tint">
            <Div className="login-modal" >
                <Title className="title" level="1" >
                    Регистрация
                </Title>

                <FormLayout>
                    <FormItem top="ФИО" htmlFor="pass" className="form" status={name ? 'valid' : 'error'}
                    >
                        <Input id="pass" type="password" placeholder="Фамилия Имя Отчество" value={name}
                            onChange={(event) => setName(event.currentTarget.value)}

                        />
                    </FormItem>

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
                            placeholder="Введите email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.currentTarget.value)}
                        />
                    </FormItem>
                    <FormItem top="Пароль" htmlFor="pass" className="form" status={password ? 'valid' : 'error'}
                    >
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
                    onClick={() => onRegisterClick()}
                >
                    Зарегестрироваться
                </Button>
            </Div>
        </Card>
    </div>)
}

export default RegisterPage