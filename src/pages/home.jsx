import React from 'react'
import '../assets/styles/Home.css'
import Hero from '../assets/widgets/components/hero'
import Categories from '../assets/widgets/components/categories'
import CardLarge from '../assets/widgets/components/cardLarge'
import Footer from '../assets/widgets/components/footer'
import Images from '../assets/widgets/components/slider'
import {ImagesSlider} from '../assets/data/Data'
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <main>
    <section className='hero-container'>
        <Hero />
    </section>
    <section className='categories'>
      <div className="tile">
        <h1><i>categories</i></h1>
      </div>
        <Categories />
    </section>
    <section className='card--show'>
        <CardLarge />
    </section>
    <section className="recents">
      <div className="tile">
        <h1><i>WHAT'S NEW</i></h1>
        <span><Link to='/Models' className='link'>See All..</Link></span>
      </div>
      <Images images={ImagesSlider}/>
    </section>


    <Footer/>
   
    </main>
  )
}

export default Home