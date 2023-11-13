import { AppRoot, Panel, PanelHeader, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import "./App.scss"
const App = () => {
    return (
        <AppRoot>
            <SplitLayout header={<PanelHeader separator={false} />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>ARTERIA.university</PanelHeader>
                            <div className='router-container'>
                            <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
                            </div>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

export default App;
