import React from 'react';
import Hero from '../componets/Hero'
import Banner from '../componets/Banner'
import {Link} from 'react-router-dom'
import Services from '../componets/Services'
import FeaturedRoom from '../componets/FeaturedRoom'

const Home = () =>{
    return (
      <>
    <Hero>
        <Banner  title="luxurious rooms" subtitile="deluxe roms starting at $400">
          <Link  to="/roos" className="btn-primary">
              our rooms
              </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
        
        </>
    )
}
export default Home