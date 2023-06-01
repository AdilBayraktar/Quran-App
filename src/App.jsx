import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './Layouts/Container'
import SurahScreen from './screens/SurahScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={< HomeScreen />} />
          <Route path='surah/:id' element={< SurahScreen />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App