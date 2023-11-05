import { Button, ButtonGroup, Card, Div, Headline, Paragraph, Separator, Spinner, Text, Title } from "@vkontakte/vkui";
import React, { FC, useEffect, useState } from "react";
import { useGetAllProgramModelsQuery } from "../../../../core/store/api/program-models-api";
import { ProgramModel } from "../../../../types/program-model";
import "./ProgramsListPart.scss";
import dayjs from 'dayjs'
import { BASIS_DATE_FORMAT } from "../../../../utils/date-format";
import { useNavigate } from "react-router-dom";

const ProgramsListPart: FC = () => {
    /* Апи запрос с бека */
    const {
        data: programsList,
        isSuccess: isSuccessProgramsList,
        isError: isErrorProgramsList,
        isLoading: isLoadingProgramsList,
        refetch: refetchProgramList

    } = useGetAllProgramModelsQuery(null)
    /* Заполнение и фильтрация списка программ */
    const [curProgramsList, setCurProgramsList] = useState<ProgramModel[]>([])

    useEffect(() => {
        setCurProgramsList(programsList || [])
    }, [programsList])
    useEffect(() => {
        console.log("curProgramsList", curProgramsList)
    }, [curProgramsList])
    /*  */
    useEffect(() => {
        console.log("isSuccessProgramsList", isSuccessProgramsList)
    }, [isSuccessProgramsList])

    /* переход на страничку с нужной программой */
    const navigate = useNavigate()
    function goToFullInfoProgramPage(id: number) {
        navigate(`/abit/program/${id}`)
    }

    function genProgramList() {
        return curProgramsList.map((item) => (<>
            <Card key={item.id} className="program-card" mode="shadow">
                <Div>
                    <Title level="1" >
                        {item.name}
                    </Title>
                </Div>
                <Separator />

                {Boolean(item?.tags?.length) && (<><Div>
                    {item.tags.map((item, index) => (<Text key={index}>{item}</Text>))}
                </Div>
                    <Separator /></>)}

                <Div>
                    <Paragraph className="program-card-text-block">
                        <Headline level="1" weight="2" >
                            Курсы стартуют:
                        </Headline>
                        <Headline level="1" weight="3" >
                            {dayjs(item.start).format(BASIS_DATE_FORMAT)}
                        </Headline>
                    </Paragraph>
                    <Paragraph className="program-card-text-block">
                        <Headline level="1" weight="2" >
                            Длительность курсов:
                        </Headline>
                        <Headline level="1" weight="3" >
                            {dayjs.duration(item.duration).asMonths().toFixed()} месяцев
                        </Headline>
                    </Paragraph>

                </Div>
                <Separator />
                <Div>
                    <ButtonGroup mode="vertical" gap="m" stretched>
                        <Button size="l" appearance="accent-invariable" stretched onClick={() => goToFullInfoProgramPage(item.id)}>
                            Узнать подробнее
                        </Button>
                    </ButtonGroup>
                </Div>

            </Card>
        </>))
    }
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
                        onClick={() => refetchProgramList()}
                    >
                        Перезагрузить страницу
                    </Button>
                </Div>
            </Card>
        )

    }
    function genPage() {
        if (true) {
            return genProgramList()
        }
        else if (isErrorProgramsList) {
            return getErrorMessage()
        }
        else if (isLoadingProgramsList) {
            return getLoadingSpinner()

        }
    }
    return (<div className='programs-list-part-body'>
        {genPage()}
    </div>)
};

export default ProgramsListPart;
