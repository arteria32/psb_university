import { AppRoot, Panel, PanelHeader, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import "./App.scss";
import * as React from 'react';

function App() {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>ARTERIA.university | CABINET</PanelHeader>
              <div className='router-container'>
                huwoirld
                {/*                 <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
 */}              </div>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}

export default App
