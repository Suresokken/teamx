import * as React from 'react'
import bottle from '../../assets/bottle.jpg';
import wines from '../../assets/wines.png';

class Stolt extends React.Component {
    public render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="jumbotron jumbAreaOne">
                        <h1 className="display-4 text-center font-weight-bold">STOLTEN-HOLM VIN</h1>
                        <h2 className="display-8 text-center font-italic kashuan">A part of Stoltenborg Invest</h2>
                        <hr/>
                    </div>

                    <div className="jumbotron jumbAreaTwo">
                        <div className="row">
                            <div className="col-2 text-center">
                                <img className="imgBottle" src={bottle}/>
                            </div>
                            <div className="col-8 text-center">
                                <h4>Velkommen til Stolten-Holm Vin</h4>
                                <p>STOLTEN-HOLM VIN importerer udelukkende eksklusive vine fra vinhuset COLLAZZI.<br/>
                                    Vi går ikke på kompromis med kvalitet, og er kompromisløse i vores jagt på
                                    perfektion.</p>
                                <hr/>
                            </div>
                            <div className="col-2 text-center">
                                <img className="imgBottle" src={bottle}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jumbotron jumbAreaThree text-center">
                <img className="img-fluid" src={wines} width=""/>
                    <h5>STOLTEN-HOLM VIN</h5>
                    <p>
                        <span>info@stolten-holm.dk</span><br/>
                        <span>+45 27 81 60 78
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Stolt;