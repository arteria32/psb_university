import { Button, Div, Group, Panel, PanelHeader, View } from "@vkontakte/vkui";
import "./UserPage.scss";
import React, { FC } from "react";

const UserPage: FC = () => {
  return (
    <div className="basis-page-container">
      <View activePanel="user">
        <Panel id="user">
          <PanelHeader>Информация пользователя</PanelHeader>
          <Group>
            <Div>
              <Button stretched mode="secondary" size="m">
                Редактировать
              </Button>
            </Div>
          </Group>
        </Panel>
      </View>
    </div>
  );
};

export default UserPage;
