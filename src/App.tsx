import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/scss/style.scss'
import { ThemeProvider } from 'styled-components/macro'
import theme from 'theme'
import Header from 'components/Header'
import Footer from 'components/Footer'
import TopPage from 'pages/TopPage'
import GoToTop from 'components/GoToTop'
import MyRecord from 'pages/MyRecord'
import ColumnPage from 'pages/Column'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/my-record" element={<MyRecord />} />
          <Route path="/column" element={<ColumnPage />} />
        </Routes>
        <GoToTop />
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
