import { AppRoot, Panel, PanelHeader, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { RouterProvider } from 'react-router-dom';
import "./App.scss";
import HeaderPart from './core/parts/HeaderPart/HeaderPart';
import router from './routes';
import React from "react"
function App() {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader><HeaderPart /></PanelHeader>
              <div className='router-container'>
                <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
              </div>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}

export default App
