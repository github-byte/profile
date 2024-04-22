import React, { useContext } from 'react'
import { MainContext } from '../App';

const Logout = (props) => {
    const { setLoggedIn, setName, name, setPassword, password } = useContext(MainContext)
    return (
        <div>
            <div style={{ width: "80%", marginTop:"10%", textAlign:"center" }}>
                <h1>Login Form</h1>
                <form>
                    <div>
                        <label>Username</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={() => setLoggedIn(true)}>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default Logout;