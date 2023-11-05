import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './core/store/store'
import './index.scss'
import { keycloakSetting } from './keycloak'
import { AuthProvider } from "react-oidc-context";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <AuthProvider {...keycloakSetting} redirect_uri={window.location.href}>
      <Provider store={store}>
        <ConfigProvider>
          <AdaptivityProvider>
            <App />
          </AdaptivityProvider>
        </ConfigProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
)
