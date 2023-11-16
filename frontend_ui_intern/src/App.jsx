import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Container1 from './components/Container_1/Container1'
import Containereq from './components/eq_container/Containereq'
import ScrollBar from './components/HorizontalBar/ScrollBar'
import Container2 from './components/Container_2/Container2'
import VerticalScroll from './components/verticalScroll/VerticalScroll'
import Containereq2 from './components/eq_container2/Containereq2'
import Footer from './components/Footer/Footer'
import Vacancies from './components/Vacancies/Vacancies'
import Privacy from './components/Privacy/Privacy'

const App = () => {
  return (
    <>
      <Navbar/>
      <Container1 />
      <Containereq/>
      <ScrollBar/>
      <Container2/>
      <VerticalScroll/>
      <Containereq2/>
      <Privacy/>
      <Vacancies />
      <Footer/>
    </>
  )
}

export default App


