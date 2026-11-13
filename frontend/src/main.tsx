import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { baseAPI } from './api/baseApi.ts'

createRoot(document.getElementById('root')!).render(
  <ApiProvider api={baseAPI}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApiProvider>
)
