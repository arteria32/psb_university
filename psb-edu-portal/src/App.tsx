import { AppRoot, Group, Panel, PanelHeader, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const App = () => {
    return (
        <AppRoot>
            <SplitLayout header={<PanelHeader separator={false} />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>VKUI</PanelHeader>
                            <Group>
                                <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />

                            </Group>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

export default App;
