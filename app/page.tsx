import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import OurFocus from './components/OurFocus'
import OurMission from './components/OurMission'
import Excellence from './components/Excellence'
import CoreValues from './components/CoreValues'
import RegistrationParticipation from './components/RegistrationParticipation'
import MobileNav from './components/MobileNav'
import Participation from './components/Participation'

const Main = () => {
  return (
    <main>
      {/* <h1 className="text-6xl font-extrabold text-center">IGNITE EXCELLENCE</h1>
      <p className='text-2xl font-extralight text-center mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className="text-[#b3001b] italic">Expedita culpa rerum ipsum!</span></p> */}
      <MobileNav/>
      <Hero/>
      <AboutUs/>
      <OurFocus/>
      <OurMission/>
      <Excellence/>
      <CoreValues/>
      <Participation/>
      <RegistrationParticipation/>
    </main>
  )
}

export default Main
