import React, { Component} from 'react';
import news_api from '../../services/news_api';
// import img02 from '../../assets/images/news.jpg';
import moment from 'moment';

export default class NewsSpot extends Component {

    state = {
        posts: [],
        featured_media: []
    };

    componentDidMount() {
        this.loadPosts();
        this.loadFeaturedImage();
    }

    loadPosts = async () => {
        const response = await news_api.get(`/posts`);
        this.setState({ posts: response.data });
        // console.log(response.data);
    }

    loadFeaturedImage() {
        // const image = this.state.posts;
        // console.log(`feature image ...${image}`);
    }

    render() {

        return (
            <section className="content" id="projetos" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInRight">
                            <ul>
                                {this.state.featured_media}
                                {this.state.posts.map(post => (
                                    <li className="mb-4 post-cards" key={post.id}> <h3> <a href={post.link} target="_blank" rel="noopener noreferrer"> {post.title.rendered} </a> </h3>
                                       <small> {moment(post.date_gmt).format("DD/MM/YYYY")} </small>  </li> 
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="title">
                                
                                <h2 className="mb-4"> Últimas notícias <br/> do blog </h2>
                                <p> Todas as notícias do blog você encontra aqui.
                                </p>
                                <p>
                                    <a href="http://blog.jaccon.com.br" target="_blank" className="btn btn-large btn-gradient btn-rounded mt-4" rel="noopener noreferrer"> Acessar o Blog </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
};

