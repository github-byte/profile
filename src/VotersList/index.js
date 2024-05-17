import React, { useEffect, useState } from 'react'
import './index.css'

const InputVotes = ({ setVotes = () => { }, votes = {} }) => {
    const [error, setError] = useState(false)
    const [currentVote, setCurrentVote] = useState("")
    const handleOnChange = (e) => {
        let voteVal = e.target.value;
        setCurrentVote(voteVal)
    }
    const handleSubmit = () => {
        if (currentVote.toUpperCase() === currentVote.toLowerCase() || currentVote.length > 1) {
            setError(true)
        }
        else {
            setError(false)
            let oldVotes = { ...votes }
            if (oldVotes[currentVote.toUpperCase()]) {
                oldVotes[currentVote.toUpperCase()] += 1;
            }
            else {
                oldVotes[currentVote.toUpperCase()] = 1;
            }
            setVotes(oldVotes)
        }
        setCurrentVote("")
    }
    console.log("inside votes", votes)
    return (<div>
        <input value={currentVote} onChange={handleOnChange} type="text" />
        <button onClick={handleSubmit}>Submit</button>
        {error && <p>Error!</p>}
    </div>);
}

const ShowTotalVotes = ({ votes = {} }) => {
    return (<div>
        <p>Total Votes</p>
        <table className='table-content'>
            <thead>
                <tr>
                    <th>Vount Name</th>
                    <th>No of Votes</th>
                </tr>
            </thead>
            <tbody className='table-content'>
                {
                    Object.entries(votes).map((vote) => {
                        return (<tr className='table-content'>
                            <td>{vote[0]}</td>
                            <td>{vote[1]}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
}

const VoterList = (props) => {
    const [votes, setVotes] = useState({})
    return (
        <div className='input-votes'>
            <h1>Voting Panel</h1>
            <div className='voter-inputs'>
                <InputVotes setVotes={setVotes} votes={votes} />
                <InputVotes setVotes={setVotes} votes={votes} />
            </div>
            <div style={{ marginTop: "20px" }}>
                {Object.keys(votes).length > 0 && <ShowTotalVotes votes={votes} />}
            </div>
        </div>
    )
}

export default VoterList;