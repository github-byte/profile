import React, { useContext } from 'react'
import './index.css'
import { MainContext } from '../App'

const SearchBody = () => {
    return (<div className='search'>Search</div>)
}

const AvatarBody = ({ name = '' }) => {
    return (<div className='avatar'>
        <img height={20} width={20} alt="avatar" style={{ borderRadius: '100%' }} src="https://static.vecteezy.com/system/resources/previews/011/675/382/original/man-avatar-image-for-profile-png.png" />
        <p style={{ marginBottom: '0px', paddingLeft: '8px' }}>{name}</p>
    </div>)
}

const LoggedIn = (props) => {
    const { name = '' } = useContext(MainContext)
    const sidebarItems = [{ name: "Dashboard", icon: "" }, { name: "Team", icon: "" }, { name: "Projects", icon: "" }, { name: "Calender", icon: "" }]
    // const yourteams = [{ name: "Hero ", icon:""  }, { name: "Team", icon: ""}, { name: "Projects", icon: "" }, { name: "Calender", icon:"" }]
    console.log("inside name",name)
    return (
        <div className='main-div'>
            <div className='sidebar'>
                <img src="" />
                {sidebarItems?.map((item) => {
                    const { name = '', icon = '' } = item || {}
                    return (<div>
                        {/* <img src={icon} alt={name}/> */}
                        <p>{name}</p>
                    </div>)
                })}
            </div>
            <div style={{ width: "100%" }}>
                <div className='search-bar'>
                    <SearchBody name={name} />
                    <div style={{ border: '1px solid lightgrey', height: '2px' }} />
                    <AvatarBody name={name} />
                </div>
                <div className='body-div'>
                    sjdnsdm
                </div>

            </div>
        </div>
    )

}

export default LoggedIn;