import React from "react";

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

export default ShowTotalVotes;