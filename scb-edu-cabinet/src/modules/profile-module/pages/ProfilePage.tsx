import React, { FC } from "react";
import "./ProfilePage.scss";
import { Card, FormItem, FormLayout, FormLayoutGroup, Input, Separator } from "@vkontakte/vkui";



const ProfilePage: FC = () => {
    return (
        <Card className='profile-page-viewer-page-body'>
            <FormLayout className="profile-form">
                <FormLayoutGroup mode="vertical">
                    <FormItem htmlFor="lastName" top="Фамилия">
                        <Input id="lastName" />
                    </FormItem>
                    <FormItem htmlFor="name" top="Имя">
                        <Input id="name" />
                    </FormItem>

                    <FormItem htmlFor="patronymic" top="Отчество">
                        <Input id="patronymic" />
                    </FormItem>
                </FormLayoutGroup>
                <FormLayoutGroup mode="horizontal">
                    <FormItem htmlFor="email" top="Email">
                        <Input id="email" />
                    </FormItem>
                </FormLayoutGroup>
                <Separator />
                <FormLayoutGroup mode="vertical">
                    <FormItem htmlFor="lastName" top="ВУЗ">
                        <Input id="university" />
                    </FormItem>
                    <FormItem htmlFor="specialization" top="Специальность">
                        <Input id="specialization" />
                    </FormItem>
                    <FormItem htmlFor="course" top="Курс">
                        <Input id="course" />
                    </FormItem>
                </FormLayoutGroup>
                <Separator />
                <FormLayoutGroup mode="vertical">
                    <FormItem htmlFor="jobPlace" top="Текущее место работы">
                        <Input id="jobPlace" />
                    </FormItem>
                    <FormItem htmlFor="position" top="Должность">
                        <Input id="position" />
                    </FormItem>

                </FormLayoutGroup>
            </FormLayout>
        </Card>)

};

export default ProfilePage;
