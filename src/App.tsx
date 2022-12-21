import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/scss/style.scss'
import { ThemeProvider } from 'styled-components/macro'
import theme from 'theme'
import Header from 'components/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
