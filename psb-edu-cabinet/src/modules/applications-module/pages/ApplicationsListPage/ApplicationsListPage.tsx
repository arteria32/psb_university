import { Button, Card, Div, Footer, List, Panel, Spinner, Title } from "@vkontakte/vkui";
import React, { FC, useEffect, useState } from "react";
import { useGetAllApplicationsQuery } from "../../../../core/store/api/applications-api";
import "./ApplicationsListPage.scss";
import { Application } from "../../../../types/application";
import ApplicationCardComponent from "../../components/ApplicationCardComponent/ApplicationCardComponent";

const ApplicationsListPage: FC = () => {
    /* 1. Подключаем Api */
    const {
        data: applicationsList,
        isSuccess: isSuccessApplicationsList,
        isError: isErrorApplicationsList,
        isLoading: isLoadingApplicationsList,
        refetch: refetchApplicationsList

    } = useGetAllApplicationsQuery(null)

    const [appsList, setAppsList] = useState<Application[]>([])
    useEffect(() => {
        console.log("appl", appsList)
        setAppsList([
            {
                "id": 0,
                "date": "2023-11-06T11:30:38.283Z",
                "programId": 0,
                "userId": 0,
                "applicationStatus": "Checking",
                "info": "string"
            }
        ])
    }, [applicationsList])
    /* Рисуем контент */
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
                        onClick={() => refetchApplicationsList()}
                    >
                        Перезагрузить страницу
                    </Button>
                </Div>
            </Card>
        )

    }
    function genApplicationsList() {
        return (<Panel className="applications-list-container">
            <List>
                {appsList.map(item => (<ApplicationCardComponent application={item} key={item.id} />))}
            </List>
            <Footer>Количество заявок: {appsList?.length}</Footer>


        </Panel>)
    }
    function genPage() {
        if (isSuccessApplicationsList) {
            return genApplicationsList()
        }
        else if (isErrorApplicationsList) {
            return getErrorMessage()
        }
        else if (isLoadingApplicationsList) {
            return getLoadingSpinner()

        }
    }
    return (<div className='applications-body'>
        {genPage()}
    </div>)

};

export default ApplicationsListPage;
