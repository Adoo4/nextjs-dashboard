
'use client'

import React, { useState } from 'react'
let LikeButton = () => {
    let [count, addcount] = useState(0)
    let increment = () => {

        addcount((prev)=> prev + 1)
      }
return(
<>
<button style={{background:"black", color:"white", padding:"1rem"}} onClick={increment}>Increment</button>
<p>Count: {count}</p>
</>
)

}

export default LikeButton