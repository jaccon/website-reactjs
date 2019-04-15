import React, { Component} from 'react';
import github_api from '../../services/github_api';
import moment from 'moment';

export default class NewsSpot extends Component {

    state = {
        repositories: []
    };

    componentDidMount() {
        this.loadRepositories();
    }

    loadRepositories = async () => {

        const response = await github_api.get();
        this.setState({ repositories: response.data });
        
    }

    render() {

        return (
            <section className="content" id="projetos" >
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 wow fadeInLeft">
                        <div className="title">
                            <h2 className="mb-4"> Alguns de meus <br/> projetos no GitHub</h2>
                            <p> Estou atuando na área de desenvolvimento a mais de 18 anos. Sempre trabalhando com soluções open source. Acompanhando todas as tendências de mercado no que diz respeito tecnologia 
                                <br/> Conheça a lista completa em:
                                <a href="https://github.com/jaccon/"> https://github.com/jaccon/ </a>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 wow fadeInRight">
                        <ul>
                            {this.state.repositories.map(repo => (
                                <li className="mb-4" key={repo.id}> <strong> <a href={repo.html_url} target='_blank' rel='noopener noreferrer'> {repo.name} </a> </strong> <br/>
                                    Atualizado em: {moment(repo.pushed_at).format("DD/MM/YYYY")} <br/> {repo.description} </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        )
    }
};

