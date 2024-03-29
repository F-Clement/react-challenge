import React, { Component } from 'react';
import css from "./css/Content.module.css";

import PostItemAPI from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';

export class ContentAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: []
        };
    }

    componentDidMount() {
        this.fetchImages();

    };

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=100`);
        console.log(response);
        const fetchedPosts = response.data.hits;

        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts
        });
    }

    handleSearch = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post) => {
            return post.user.toLowerCase().includes(name);
        });
        this.setState({
            posts: filteredPosts
        });
    };


    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchInput'>Search:</label>
                        <input
                            type='text'
                            id='searchInput'
                            name='search'
                            onChange={this.handleSearch}
                        />
                        <p>Posts found: {this.state.posts.length}</p>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                            <PostItemAPI savedPosts={this.state.posts} />
                            : <Loader />
                    }

                </div>
            </div>
        );
    }
}

export default ContentAPI;