import React from 'react';

const divStyle1 = {
    minHeight: '300px !important'
};

const Counter = () => (
    <section className="p-0">
    <div className="container-fluid">
        <div className="row" style={divStyle1}>
                <div className="col-md-12 p-0">
                    <div className="counters d-flex align-items-center text-left bg-img1">
                        <div className="bg-overlay gradient-bg1 opacity-8"></div>
                        <div className="counter-row">
                            <div className="counter-item">
                                <div className="count alt-font">69</div>
                                <h6 className="text-white"> Projetos Web </h6>
                            </div>
                            <div className="counter-item">
                                <div className="count alt-font"> 20</div>
                                <h6 className="text-white"> Mobile Apps </h6>
                            </div>
                            <div className="counter-item">
                                <div className="count alt-font"> 23</div>
                                <h6 className="text-white"> Projetos Open Source </h6>
                            </div>
                            <div className="counter-item">
                                <div className="count alt-font"> 100000 </div>
                                <h6 className="text-white"> Horas de desenvolvimento </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Counter;
