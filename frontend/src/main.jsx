import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import theme from './theme'

import { TrendsContextProvider } from './contexts/TrendsContext'
import { ErrorContextProvider } from './contexts/ErrorContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS defaultColorScheme="light">
      <TrendsContextProvider>
        <ErrorContextProvider>
          <App />
        </ErrorContextProvider>
      </TrendsContextProvider>
    </MantineProvider>
  </StrictMode>,
)