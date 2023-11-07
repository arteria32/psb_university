import React from "react";

import { Card, Div, FormItem, FormLayout, FormLayoutGroup, Select, Title } from "@vkontakte/vkui";
import { Application } from "../../../../types/application";
import "./ApplicationModalPart.scss";
import { useGetAllProgramsModelsQuery } from "../../../../core/store/api/program-models-api";

const ApplicationModalPart: React.FC<{ application: Application }> = ({ application }) => {
    const { data: programsList } = useGetAllProgramsModelsQuery(null)

    return (<Card className="application-modal" mode="outline">
        <Div>
            <Title level="3">Заявка №{application.id}</Title>
        </Div>
        <Div>
            <FormLayout>
                <FormLayoutGroup mode="vertical">
                    <FormItem name="Образовательная программа">
                        <Select
                            disabled={false}
                            options={(programsList || []).map(
                                (i) => ({
                                    label: i.description,
                                    value: i.id,
                                }),
                            )}
                        />
                    </FormItem>
                </FormLayoutGroup>
            </FormLayout>
        </Div>
    </Card>)
};

export default ApplicationModalPart;
