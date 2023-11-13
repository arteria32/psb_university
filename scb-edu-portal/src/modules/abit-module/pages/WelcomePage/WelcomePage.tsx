import '@vkontakte/vkui/dist/vkui.css';
import * as React from 'react';
import './WelcomePage.scss';
import { ButtonGroup, Button } from '@vkontakte/vkui';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();
    const goToProgramsPage = () => navigate("/abit/programs");
    const goToAccountPage = () => navigate("/abit/account")

    return (
        <div className='welcome-page-body'>
            <ButtonGroup mode="vertical" gap="m" >

                <Button size="l" appearance="accent" stretched mode="primary" onClick={() => goToProgramsPage()}>
                    Выбрать образовательную программу
                </Button>
                {/*   <Button size="l" appearance="accent" disabled mode="secondary">
                    Помочь с выбором образовательной программы
                </Button> */}
                <Button size="l" appearance="accent" stretched mode="secondary" onClick={() => goToAccountPage()}>
                    Перейти в личный кабинет
                </Button>
            </ButtonGroup>
        </div >
    );
};

export default WelcomePage;
