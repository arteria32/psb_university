import React, { useEffect, useState } from "react";

import { Button, ButtonGroup, Card, Div, FormItem, FormLayout, FormLayoutGroup, Select, Textarea, Title } from "@vkontakte/vkui";
import { Application } from "../../../../types/application";
import "./ApplicationModalPart.scss";
import { useGetAllProgramsModelsQuery } from "../../../../core/store/api/program-models-api";

const ApplicationModalPart: React.FC<{ application?: Application | null }> = ({ application }) => {
    const { data: programsList } = useGetAllProgramsModelsQuery(null)
    const [selectedIdProgram, setSelectedIdProgram] = useState<number>();
    const [curMotivationsLetter, setMotivationLetter] = useState<string>();
    const [isNewApplication, setIsNewApplication] = useState<boolean>(true);
    useEffect(() => {
        if (!application) return;
        setIsNewApplication(false)
        let appBody;
        try {
            appBody = JSON.parse(application.info);

        } catch (error) {
            return
        }
        if (!appBody) return
        setSelectedIdProgram(appBody.id);
        setMotivationLetter(appBody.letter)
    }, [application])
    return (<Card className="application-modal" mode="outline">
        <Div>
            <Title level="3">{isNewApplication ? "Новая заявка" : `Заявка №${application?.id}`}</Title>
        </Div>
        <Div className="form-control">
            <FormLayout>
                <FormLayoutGroup mode="vertical">
                    <FormItem top="Образовательная программа">
                        <Select
                            disabled={!isNewApplication}
                            options={(programsList || []).map(
                                (i) => ({
                                    label: i.description,
                                    value: i.id,
                                }),
                            )}
                            value={selectedIdProgram}
                        />
                    </FormItem>
                    <FormItem top="Мотивционное письмо">
                        <Textarea disabled={!isNewApplication} placeholder="Почему Вы хотите попасть на эту образовательную программу" value={curMotivationsLetter} />
                    </FormItem>
                </FormLayoutGroup>
            </FormLayout>
            <ButtonGroup mode="vertical" gap="m" align="right">
                <Button size="l" appearance="accent"  >
                    Отправить на модерацию новую заявку
                </Button>
            </ButtonGroup>
        </Div>
    </Card>)
};

export default ApplicationModalPart;
