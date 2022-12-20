import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/scss/style.scss'
import { ThemeProvider } from 'react-bootstrap'
import theme from 'theme'
import Header from 'components/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
