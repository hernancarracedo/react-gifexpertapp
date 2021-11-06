//import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'

import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category }) => {


    const { data:images, loading } = useFetchGif( category );

    //console.log(loading);
/*
    useEffect( () => {
        getGifs(category)
         .then( setImages )
    }, [ category ])
*/


    //getGifs();

    return (
        <>
        <h3 className="animate__animated animate__fadeIn"> { category } </h3>

        { loading && <p className="animate__animated animate__flash">loading</p>}

         <div className="card-grid ">
                
                {
                    images.map( img =>(
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            
        </div>
        
    </>
    )
}
