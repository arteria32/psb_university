import { Button, ButtonGroup, Card, Div, Headline, Paragraph, Spinner, Text, Title } from "@vkontakte/vkui";
import dayjs from 'dayjs';
import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProgramModelByIdQuery } from "../../../../core/store/api/program-models-api";
import { BASIS_DATE_FORMAT } from "../../../../utils/date-format";
import "./ProgramInfoPage.scss";

const ProgramInfoPage: FC = () => {

    /* 1. Получаем id из params */
    const { id: programId } = useParams();

    useEffect(() => {
        console.log("programId", programId)

    }, [programId])
    /* 2. Забираем информацию с бека по модулю */
    const { data: programModelInfo, isSuccess: isSuccessInfo, isLoading: isLoadingInfo, isError: isErrorInfo, refetch: refetchProgrmInfo } = useGetProgramModelByIdQuery(Number(programId))
    useEffect(() => {
        console.log('programModlInfo', programModelInfo)
    }, [programModelInfo, isSuccessInfo, isLoadingInfo, isErrorInfo])
    /* 3. отображаем данные */
    function getLoadingSpinner() {
        return (
            <Spinner className="center-message" size="large" />
        )
    }
    function getErrorMessage() {
        return (
            <Card className="center-message" mode="outline-tint">
                <Div className="error-message">
                    <Title level="1" >
                        Проблема с загрузкой данных
                    </Title>
                    <Button
                        appearance="accent-invariable"
                        size="l"
                        mode="primary"
                        onClick={() => refetchProgrmInfo()}
                    >
                        Перезагрузить страницу
                    </Button>
                </Div>
            </Card>
        )

    }
    function getProgramInfo() {
        return (
            programModelInfo && (<Card className="program-info-container">
                <Div className="title-container">
                    <Title level="1">
                        {programModelInfo?.name}
                    </Title>
                </Div>

                <Div className="description-container">
                    <Text>{programModelInfo?.description}</Text>
                </Div>
                <div className="bottom-container">
                    <Div>
                        <Paragraph className="program-card-text-block">
                            <Headline level="1" weight="2" >
                                Курсы стартуют:
                            </Headline>
                            <Headline level="1" weight="3" >
                                {dayjs(programModelInfo.start).format(BASIS_DATE_FORMAT)}
                            </Headline>
                        </Paragraph>
                        <Paragraph className="program-card-text-block">
                            <Headline level="1" weight="2" >
                                Длительность курсов:
                            </Headline>
                            <Headline level="1" weight="3" >
                                {dayjs.duration(programModelInfo.duration).asMonths().toFixed()} месяцев
                            </Headline>
                        </Paragraph>

                    </Div>
                    <Div>
                        <ButtonGroup mode="vertical" gap="m" align="right">
                            <Button size="l" appearance="accent" >
                                Подать заявку
                            </Button>
                            <Button size="l" appearance="accent" mode="secondary" onClick={() => goToProgramsListPage()}>
                                Вернуться к списку всех программ
                            </Button>
                        </ButtonGroup>

                    </Div>
                </div >


            </Card >
            ))
    }
    /*  */
    /* 4. Переход обратно на список всех программ  */
    const navigate = useNavigate();
    function goToProgramsListPage() {
        navigate("/abit/programs")
    }
    const genPage = () => {
        if (isSuccessInfo) {
            return getProgramInfo()
        } else if (isLoadingInfo) {
            return getLoadingSpinner()
        } else if (isErrorInfo) {
            return getErrorMessage()
        }
    }

    return (
        <div className='program-info-page-body'> {genPage()}
        </div>)
};

export default ProgramInfoPage;
