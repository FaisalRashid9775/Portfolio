import Footer from '@/app/Component/Footer'
import Header from '@/app/Component/Header'
import Header2 from '@/app/Component/Header2'
import Newsletter from '@/app/Component/Newsletter'
import Services from '@/app/Component/Services'
import React from 'react'
import Homeheader from './Component/Homeheader'
import Skills from './Component/Skills'
import Portfolio from './Component/Portfolio'

export default function page() {
  return (
    <div>
   <Homeheader/>
      <Services/>
      <Skills/>
      <Portfolio/>
     
    </div>
  )
}
