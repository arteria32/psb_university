import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './core/store/store'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <AdaptivityProvider>
          <App />
        </AdaptivityProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)
