import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './Components/Navbar/Navbar'
import Hero  from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Compus from './Components/Compus/Compus'
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer' />
      <Programs />
      <About />
      <Title subTitle='Gallery' title='Compus Photos' />
      <Compus />
      <Title subTitle='TESTIMONIALS' title='What Student Says' />
      </div>
    </div>
  )
}

export default App
