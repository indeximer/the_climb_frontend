import React from 'react'

import AppRouter from './routes'
import { GlobalStyle } from '@/components/GlobalStyles'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  )
}
