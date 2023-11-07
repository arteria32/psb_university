import React from "react";

import { Application } from "../../../../types/application";
import "./ApplicationCardComponent.scss";
import { Card, Div, Title, Text } from "@vkontakte/vkui";
import dayjs from 'dayjs';
import { BASIS_DATE_FORMAT } from "../../../../utils/date-format";

const ApplicationCardComponent: React.FC<{ application: Application }> = ({ application }) => {

    
    return (<Card className="application-card" mode="outline">
        <Div>
            <Title level="3">Заявка №{application.id}</Title>
        </Div>
        <Div>
            <Text title="Дата подачи заявки"> {dayjs(application.date).format(BASIS_DATE_FORMAT)}</Text>
            <Text title="Статус заявления">{application.applicationStatus}</Text>

        </Div>
    </Card>)
};

export default ApplicationCardComponent;
