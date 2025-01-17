import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

export default function Room({room}){
   const {name,slug,images,price} = room;

    return(
        <article className="room">
            <div className="img-container">

          
                <img src={images[0] || defaultImg} alt="singel rooms"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link  to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>

         </div>
    <p className="room-info">{name}</p>
           
        </article>
    )
    }

    Room.propTypes ={
        rooms:PropTypes.shape({
            name:PropTypes.string.isRequired,
            slug:PropTypes.string.isRequired,
            image:PropTypes.arrayOf(PropTypes.String).isRequired,
            price:PropTypes.number.isRequired,
        })
    }
