import React from 'react';

function PostItem(props) {
    const post = props.savedPosts;
    return (
        <div>
            {
                post.map((post) => {
                    return (
                        <div>
                            <p>{post.title}</p>
                            <p>{post.name}</p>
                            <img src={post.image} />
                            <p>{post.description}</p>
                        </div>
                    );

                })
            }
        </div>
    );
}

export default PostItem;