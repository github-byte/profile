import React, { useState } from 'react'
import './styles.css'

const BoxView = (props) => {
    const newArr = Array(3).fill(null).map((item) => Array(3).fill(null))
    console.log("in new arra",newArr)
    const [matrix, setMatrix] = useState(newArr)
    return (
        <div className='grid-main'>
            {matrix.map((item) => {
                return(<div className='item-grid'></div>)
            })}
        </div>
    )

}

export default BoxView;