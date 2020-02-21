import React, {Component} from 'react';
import {FaCockatail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component{
    state={
        services:[
            {
                icon:<FaHiking />,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elitMagn,corporis!"
            },
                {
                    icon:<FaBeer />,
                    title:"end less",
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magn,corporis!'
    
                },
                {
                    icon:<FaShuttleVan />,
                    title:"end hiking",
                    info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magn,corporis!'
    
                },
                {
                    icon:<FaShuttleVan />,
                    title:"end beer",
                    info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magn,corporis!'
    
                }
            
        ]
    }
    render(){
        return(
            <section className="services">

                <Title title="services" />
                <div className="services-center">
                    {
                        this.state.services.map((item,index) =>{
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>

                        })
                    }
                </div>
                
            </section>
        )
    }
}