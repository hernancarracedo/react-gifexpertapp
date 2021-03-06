import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Ponch']);

   return (
        <>
          <h2>GifExpertApp</h2>  
          <AddCategory setCategories = { setCategories } />
          <hr />

          <ol>
                {
                    categories.map( category => 
                        //<li key={ category }> { category } </li>
                        <GifGrid 
                            key ={ category }
                            category={ category } />
                    )
                }
          </ol>

        </>
    )
}
