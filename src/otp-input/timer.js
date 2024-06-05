import React, { useEffect, useState } from 'react'

const Timer = (props) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setTime((prev) => prev + 1)
        }, 1000);
        // return () => {
        //     clearTimeout();
        // }
    }, [time])
    return (
        <div>{time}</div>
    )

}

export default Timer;