import React, { FC, useEffect } from "react";
import "./ProgramsListPart.scss"
import { Button, Card, Div, Spinner, Title } from "@vkontakte/vkui";
import { useGetAllProgramModelsQuery } from "../../../../core/store/api/program-models-api";
const ProgramsListPart: FC = () => {
    const {
        data: programsList,
        isSuccess: isSuccessProgramsList,
        isError: isErrorProgramsList,
        isLoading: isLoadingProgramsList,
        refetch: refetchProgramList

    } = useGetAllProgramModelsQuery(null)
    useEffect(() => {
        console.log("programsList", programsList)
    }, [programsList])

    function genProgramList() {
        return (
            <Card>
                hi
            </Card>
        )
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
        if (isSuccessProgramsList) {
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
