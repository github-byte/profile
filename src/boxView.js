import React, { useState } from 'react'
import './styles.css'

const BoxView = (props) => {
    const newArr = Array(3).fill(null).map((item) => Array(3).fill(null))
    console.log("in new arra", newArr)
    const [matrix, setMatrix] = useState(newArr)
    const [showCross, setShowCross] = useState(false)
    const handleBoxClick = (outer, inner, item) => {
        if (item) return;
        let newMatrix = [...matrix];
        newMatrix[outer][inner] = showCross ? "X" : 'O';
        setMatrix(newMatrix);
        console.log('inside check winsd23', checkWin(newMatrix));
        setShowCross(!showCross)
    }
    const checkWin = (matrix, inner, outer) => {
        // console.log
        let lastVal = matrix[0][outer];
        let isRow = false;
        let isCol = false;
        let isDiag = false
        for (let i = 0; i < matrix.length; i++) {
            const [a, b, c] = matrix[i]
            console.log("inside a b c", a, b, c, matrix[i])
            if (a === b && a === c) {
                return true
            }
        }
        return false;
    }
    console.log(matrix, matrix.length)
    return (
        <div className='grid-main'>
            {matrix.map((item, outer) => {
                return (<div className='item-grid'>
                    {matrix[outer].map((item, inner) => {
                        return <div onClick={() => handleBoxClick(outer, inner, item)} className='item-grid-inner'>{item}</div>
                    })}
                </div>)
            })}
        </div>
    )

}

export default BoxView;