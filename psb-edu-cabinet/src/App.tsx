import { AppRoot, Panel, PanelHeader, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import "./App.scss";
import * as React from 'react';
import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';

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
