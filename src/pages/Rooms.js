import React from 'react';
import Hero from '../componets/Hero';
import Banner from '../componets/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../componets/RoomsContainer';
const  Rooms = () =>{
    return (
    <>
    <Hero hero="roomsHero">
        <Banner title="our romms">
            <Link to="/" className="btn-primary">
                return home
            </Link>
        </Banner>
        </Hero>
        <RoomsContainer />
        </>
    )
}
export default Rooms;