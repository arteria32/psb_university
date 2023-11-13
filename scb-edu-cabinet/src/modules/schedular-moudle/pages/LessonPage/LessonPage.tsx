import React, { FC, useState } from "react";
import "./LessonPage.scss";
import { Card, Div, Title, Text, Button } from "@vkontakte/vkui";
import { Lesson } from "../../../../types/lesson";
import { parseLinkToButtonName } from "../../../../utils/parse-links-lesson";


const LessonPage: FC = () => {
    const [curLesson] = useState<Lesson>({
        "id": 0,
        "name": "Математика",
        "description": "string",
        "urls": [
            "string"
        ],
        "programModelId": 0
    })
    const openLink = (link: string): void => {window.open(link)}

    return (
        <Card className='lesson-page-body'>
            <Div>
                <Title className="title" level="1">
                    {curLesson.name}
                </Title>
            </Div>
            <Div>
                <Text title="Описание урока"  >
                    {curLesson.description}
                </Text >
            </Div>
            <Div className="buttons-container">
                {curLesson.urls.map(item => (<Button key={item} size="m" onClick={() => openLink(item)}>
                    {parseLinkToButtonName(item)}
                </Button>))}


            </Div>
        </Card>)

};

export default LessonPage;
