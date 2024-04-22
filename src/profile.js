import React, { useId, useState } from 'react'
import Header from './header'
import Introduction from './introduction'
// import Journey from './journey'
import { defaultComments } from './data.js'
// import Skills from './skills'
const ChatBox = ({ setComment = () => { }, comment = '', comments = [], setComments = () => { }, id = '', handleClose = () => { } }) => {
  const newId = useId();
  console.log("in idd", newId)
  const handleComments = () => {
    const newItem = {
      comment, 
      id: newId, 
      img: 'https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg'
    }
    const commentsClone = structuredClone(comments) || []
    if (!id) {
      commentsClone.push({...newItem})
      // setComments(commentsClone)
    }
    else {
      findAndSetComments(commentsClone, newItem)
      console.log("in comments", commentsClone, comment)

    }
    setComments(commentsClone)
    setComment("")
    handleClose()
  }

  const findAndSetComments = (comments = [], newItem) => {

    for (let i = 0; i < comments.length; i++) {
      let { id: givenId = '', replies = [] } = comments?.[i]
      console.log("in id", givenId, id)
      if (givenId == id) {
        comments[i] = { ...comments?.[i], replies: [...replies, { ...newItem }] }
      }
      else findAndSetComments(replies, newItem)
    }
  }
  console.log("inside clons", comment, comments, id)
  return (<>
    <textarea onChange={(e) => setComment(e.target.value)}>{comment}</textarea>
    <button onClick={handleComments}>Post</button>
  </>)
}

const Chats = (props) => {
  const { comments = [], origComments = [] } = props
  const [openChat, setOpenChat] = useState({ 0: false })
  console.log("orig comment", origComments)
  return (<div>
    {
      comments?.map((item, index) => {
        const { name = '', comment = '', img = '', replies = [], id = '' } = item || {}
        return (<div key={index} style={{ display: "flex" }}>
          <img style={{ marginRight: 10 }} src={img} height={20} width={20} alt={name} />
          <div>
            <div>{name}</div>
            <p>{comment}</p>
            <p onClick={() => setOpenChat({ [index]: true })} style={{ fontSize: 12 }}>Reply</p>
            {openChat[index] && <ChatBox {...props} handleClose={() => setOpenChat({})} comments={origComments} id={id} />}
            <Chats {...props} origComments={origComments} comments={replies} />
          </div>
        </div>)
      })
    }
  </div>)
}
const Profile = (props) => {
  const [comments, setComments] = useState(defaultComments)
  const [comment, setComment] = useState("")
  return (
    <div style={{ margin: '10%' }}>
      <Chats comment={comment} setComments={setComments} setComment={setComment} origComments={comments} comments={comments} />
      <ChatBox comment={comment} setComments={setComments} setComment={setComment} comments={comments} />
    </div>
  )

}

export default Profile;