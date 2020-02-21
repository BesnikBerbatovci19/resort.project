import React from 'react';
import Hero from '../componets/Hero';
import Banner from '../componets/Banner'
import {Link} from 'react-router-dom'
export default function Error(){
    return <Hero>
        <Banner titile ='404' subtitile='page not found'>
            <Link to='/' className='btn-primary'>
                return home
            </Link>
        </Banner>
    </Hero>;
}