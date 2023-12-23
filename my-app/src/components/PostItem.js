import React from 'react'

function PostItem(props) {
    const post = props.post
  return (
    <div>
        <p>{post.title}</p>
        <p>{post.name}</p>
        <img src={post.image} />
        <p>{post.description}</p>
    </div>
  )
}

export default PostItem