import { Button, Card, Div, Separator, Spinner, Title } from "@vkontakte/vkui";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProgramModelByIdQuery } from "../../../../core/store/api/program-models-api";
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
        return (<>
            <Card className="program-info-container">
                <Div>
                    <Title level="1">
                        {programModelInfo?.name}
                    </Title>
                </Div>
                <Separator />
                <Div>
                    tags
                </Div>
                <Separator />
                <Div>
                    description
                </Div>
                <Separator />
                <Div>
                    buttons
                </Div>
                <Separator />
            </Card>
        </>)
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
