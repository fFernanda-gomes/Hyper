import { ThemeProvider } from 'styled-components'
import theme from './styles/theme/theme'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
