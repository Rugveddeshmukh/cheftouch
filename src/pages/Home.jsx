import React from 'react'
import MarquetHero from '../components/MarquetHero'
import AboutReveal from '../components/AboutReveal'
import ServicesSection from '../components/ServicesSection'
import MarquetScrollSections from '../components/MarquetScrollSections'
import ClientsServed from '../components/ClientsServed'
import ImageScrollReveal from '../components/ImageScrollReveal'

export default function Home(){
  return (
    <div>
      <MarquetHero/>
      <AboutReveal/>
      <ServicesSection/>
      <MarquetScrollSections/>
      <ClientsServed/>
      <ImageScrollReveal/>
    </div>
  )
}
