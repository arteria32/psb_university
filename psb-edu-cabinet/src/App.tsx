import { AppRoot, Panel, PanelHeader, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { RouterProvider } from 'react-router-dom';
import "./App.scss";
import HeaderPart from './core/parts/HeaderPart/HeaderPart';
import router from './routes';
import * as React from 'react';


function App() {
  const auth = useAuth();
  useEffect(() => {
    console.log('ыефке', auth)
    if (!auth.isAuthenticated) auth.signinRedirect()
  }, [])


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
