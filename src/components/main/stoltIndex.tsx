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
                                <p className="text-left">Collazzi Winery ligger i smukke omgivelser lige udenfor
                                    Firenze i Toscana sammen med en olivenlund med 19.000 oliventræer, en citronlund
                                    og adskillige vinmarker på skråninger og terrasser i området.<br/>
                                    Produkterne fra Collazzi er i særklasse og af højeste kvalitet, hvor
                                    kældermesteren er kendt for hellere at hælde store mængder vin ud end at sælge
                                    sekundær kvalitet.<br/>
                                    Hovedhuset ”The Collazzi Villa” er opført over en 16 års periode i det 16.
                                    århundrede og både møbler er designet og malerierne i huset tegnet af Michel
                                    Angelo. Stolten-Holm sælger produkterne fra Collazzi eksklusivt i Danmark.
                                </p>
                            </div>
                            <div className="col-2 text-center">
                                <img className="imgBottle" src={bottle}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container jumbAreaThree text-center">
                    <img className="img-fluid" src={wines} width=""/>
                    <div>
                        <h5>STOLTEN-HOLM VIN</h5>
                        <p>info@stolten-holm.dk<br/>+45 27 81 60 78</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stolt;