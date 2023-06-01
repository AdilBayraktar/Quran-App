import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './Layouts/Container'
import SurahScreen from './screens/SurahScreen'
import AudioScreen from './screens/AudioScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={< HomeScreen />} />
          <Route path='surah/:id' element={< SurahScreen />} />
          <Route path='surah-audio/:id' element={< AudioScreen />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App