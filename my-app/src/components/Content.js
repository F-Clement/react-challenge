import React, { Component } from 'react';
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                isLoaded: true
            });
        }, 2000);
    };


    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {savedPosts.map(post => {
                        return (
                            <div>
                                {this.state.isLoaded && <PostItem key={post.title} post={post} />}
                                {this.state.isLoaded && !<Loader key={1} />}

                            </div>
                        );
                    })}


                </div>
                <Loader />
            </div>
        );
    }
}

export default Content;