import React from 'react';

function PostItemAPI(props) {
    const post = props.savedPosts;
    return (
        <div>
            {
                post.map((post) => {
                    return (
                        <div key={post.id}>
                            <p>Art Type:{post.type}</p>
                            <p>Artist:{post.user}</p>
                            <img src={post.webformatURL} alt={post.user} />
                            <p>Tags:{post.tags}</p>
                        </div>
                    );

                })
            }
        </div>
    );
}

export default PostItemAPI;