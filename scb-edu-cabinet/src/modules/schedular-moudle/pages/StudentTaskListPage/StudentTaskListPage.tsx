import React, { FC, useState } from "react";
import "./StudentTaskListPage.scss";
import { Task } from "../../../../types/task";
import { Card, Title,Text } from "@vkontakte/vkui";



const StudentTaskListPage: FC = () => {
    const [taskList] = useState<Task[]>([
        {
            id: 1,
            name: "Задание 1",
            description: "Описание задания",
            lessonId: 2,
        },
        {
            id: 1,
            name: "Задание 1",
            description: "Описание задания",
            lessonId: 2,
        }, {
            id: 1,
            name: "Задание 2",
            description: "Описание задания",
            lessonId: 2,
        }, {
            id: 1,
            name: "Задание 3",
            description: "Описание задания",
            lessonId: 2,
        },
    ])
    return (
        <div className='student-task-page-body'>

            <div className="toolbox">
                toolbox
            </div>
            <div className="task-list">
                {taskList.map((item, index) => (
                    <Card key={index} className="task" mode="outline-tint">
                        <Title>
                            {item.name}
                        </Title>
                        <Text>
                            {item.description}
                        </Text>
                    </Card>
                ))}
            </div>
        </div>)

};

export default StudentTaskListPage;
