import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './core/store/store'
import './index.scss'

import dayjs from 'dayjs'
require('dayjs/locale/ru')
dayjs.locale('ru')

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
