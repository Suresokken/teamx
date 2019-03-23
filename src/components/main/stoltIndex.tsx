import * as React from 'react'

import CenterPartOne from './centerPartOne'
import CenterPartTwo from './centerPartTwo'
import CenterPartThree from './centerPartThree'
import CenterPartFour from './centerPartFour'
import CenterPartFive from './centerPartFive'
import CenterPartSix from './centerPartSix'
import CenterPartSeven from './centerPartSeven'
import CenterPartEight from './centerPartEight'


import {observer} from 'mobx-react';
import MainStore from 'src/stores/mainStore';

@observer
class Stolt extends React.Component {

    public getRender = () : any => {
        if (MainStore.renderMethod === "home") {
            return <CenterPartOne/>
        }
        if (MainStore.renderMethod === "wineOne") {
            return <CenterPartTwo/>
        }
        if (MainStore.renderMethod === "wineTwo") {
            return <CenterPartThree/>
        }
        if (MainStore.renderMethod === "wineThree") {
            return <CenterPartFour/>
        }
        if (MainStore.renderMethod === "wineFour") {
            return <CenterPartFive/>
        }
        if (MainStore.renderMethod === "wineFive") {
            return <CenterPartSix/>
        }
        if(MainStore.renderMethod == "wineSix") {
            return <CenterPartSeven />
        }
        if(MainStore.renderMethod == 'wineSeven'){
            return <CenterPartEight />
        }
        return <div>test</div>
    }

    public render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="jumbotron jumbAreaOne">
                        <h1 className="display-4 text-center font-weight-bold">STOLTEN-HOLM VIN</h1>
                        <h2 className="display-8 text-center font-italic kashuan">A part of Stoltenborg Invest</h2>
                    </div>
                    {this.getRender()}
                </div>
                <div className="container jumbAreaThree text-center">
                    <img className="img-fluid wines" src={require('../../assets/wines.png')} width=""/>
                    <div>
                        <h5 className="display-8">STOLTEN-HOLM VIN</h5>
                        <p>info@stolten-holm.dk<br/>+45 27 81 60 78 / +45 27 81 18 73</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stolt;