import React, { useContext } from 'react'
import { MainContext } from '../App';
import Navbar from './navbar';
import LoggedIn from './loggedIn';

const Test = () => {
    const contextData = useContext(MainContext)
    
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <LoggedIn/>
            </div>
        </div>
    )

}

export default Test;