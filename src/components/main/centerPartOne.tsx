import * as React from 'react'

class CenterPartOne extends React.Component {

    public render() {
        return (
            <div className="jumbotron jumbAreaTwo">
                <div className="row">
                    <div className="col-2 text-center">
                        <img className="img-fluid" src={require('../../assets/bottle.jpg')}/>
                    </div>
                    <div className="col-8 text-center">
                        <div className="popout font-weight-bold text-left">
                            STOLTEN-HOLM VIN importerer primært eksklusive vine fra vinhuset COLLAZZI.<br/>
                            Vi går ikke på kompromis med kvalitet, og er kompromisløse i vores jagt på
                            perfektion.
                        </div>
                        <hr/>
                        <p className="text-left">Collazzi Winery ligger i smukke omgivelser lige udenfor
                            Firenze i Toscana sammen med en olivenlund med 19.000 oliventræer, en citronlund
                            og adskillige vinmarker på skråninger og terrasser i området.</p>
                        <p className="text-left">Produkterne fra Collazzi er i særklasse og af højeste
                            kvalitet, hvor kældermesteren er kendt for hellere at hælde store mængder vin ud
                            end at sælge sekundær kvalitet.</p>
                        <p className="text-left">Hovedhuset ”The Collazzi Villa” er opført over en 16
                            års periode i det 16. århundrede og både møbler er designet og malerierne i
                            huset tegnet af Michel Angelo. Stolten-Holm sælger produkterne fra Collazzi
                            eksklusivt i Danmark.
                        </p>
                    </div>
                    <div className="col-2 text-center">
                        <img className="img-fluid" src={require('../../assets/bottle.jpg')}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default CenterPartOne;