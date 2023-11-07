import { Button, Card, Div, Footer, Spinner, Title, SplitLayout, ModalCard, ModalRoot } from "@vkontakte/vkui";
import React, { FC, useEffect, useState } from "react";
import { useGetAllApplicationsQuery } from "../../../../core/store/api/applications-api";
import { Application } from "../../../../types/application";
import ApplicationCardComponent from "../../components/ApplicationCardComponent/ApplicationCardComponent";
import "./ApplicationsListPage.scss";
import ApplicationModalPart from "../../parts/ApplicationModalPart/ApplicationModalPart";

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
            }, {
                "id": 0,
                "date": "2023-11-06T11:30:38.283Z",
                "programId": 0,
                "userId": 0,
                "applicationStatus": "Checking",
                "info": "string"
            }, {
                "id": 0,
                "date": "2023-11-06T11:30:38.283Z",
                "programId": 0,
                "userId": 0,
                "applicationStatus": "Checking",
                "info": "string"
            }, {
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
        return (<Card className="applications-list-container">
            {appsList.map(item => (
                <div className="application-item" key={item.id} onClick={() => clickOnCard(item)}>
                    <ApplicationCardComponent application={item} />
                </div>
            ))}
            <Footer>Количество заявок: {appsList?.length}</Footer>


        </Card>)
    }
    function genPage() {
        if (isSuccessApplicationsList || true) {
            return genApplicationsList()
        }
        else if (isErrorApplicationsList) {
            return getErrorMessage()
        }
        else if (isLoadingApplicationsList) {
            return getLoadingSpinner()

        }
    }
    /* Отрисовка модалки */
    const [selectedApplication, setSelectedApplications] = useState<Application | null>()
    const modal = (
        <ModalRoot activeModal={selectedApplication?.id.toString()} >
            {selectedApplication ? <ModalCard id={selectedApplication?.id.toString()} onClose={() => setSelectedApplications(null)}
            >
                <ApplicationModalPart application={selectedApplication} />
            </ModalCard> : <div>NoInfo</div>
            }
        </ModalRoot>
    );

    const clickOnCard = (app: Application) => setSelectedApplications(app)

    return (
        <SplitLayout modal={selectedApplication ? modal : null} className='applications-body'>
            {genPage()}
        </SplitLayout>)

};

export default ApplicationsListPage;
