import React, { Component} from 'react';
import news_api from '../../services/news_api';
import img02 from '../../assets/images/news.jpg';


export default class NewsSpot extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await news_api.get(`/posts`);
        this.setState({ posts: response.data });
        console.log(response.data);
    }


    render() {

        return (
            <section id="blog" className="bg-light p-0">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="blog-half-text title m-lg-0 text-center">
                                {this.state.posts.map(post => (
                                    <a href={post.link} target="_blank"> 
                                        <h4 className="third-color mb-3"> 
                                            {post.title.rendered} </h4> 
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="blog-half-image wow hover-effect fadeInRight" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
                                <img src={img02} alt="just test" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

