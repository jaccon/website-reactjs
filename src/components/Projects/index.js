import React from 'react';

const Projects = () => (
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
                            <li className="mb-4"> <strong> <a href="https://github.com/jaccon/SudoTOuchID"> Sudo TouchID for MacOS </a> </strong> <br/> 
                                Habilita a autênticação via touchID no terminal do macOS</li>

                            <li className="mb-4"> <strong> <a href="https://github.com/jaccon/VSCodeBackup"> VSCode Backup </a> </strong> <br/> 
                                Funcionalidade para backup de configurações do edito VSCode para Mac</li>

                            <li className="mb-4"> <strong> <a href="https://github.com/jaccon/VSCodeBackup"> jTalk </a> </strong> <br/> 
                                Script simples para abertura de comunicação via porta TCP utilizando Python </li>

                            <li className="mb-4"> <strong> <a href="https://github.com/jaccon/VSCodeBackup"> Site Shrink </a> </strong> <br/> 
                                Script Python para backup de estruturas HTML remotas </li>

                            <li className="mb-4"> <strong> <a href="https://github.com/jaccon/VSCodeBackup"> Hostmon </a> </strong> <br/> 
                                Script Python monitoramento de servidores </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
);

export default Projects;