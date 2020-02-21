import React from  'react';
import { Children } from 'react';

export default function Banner({children,title,subtitile}){
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitile}</p>
            {children}  
        </div>
    )
}