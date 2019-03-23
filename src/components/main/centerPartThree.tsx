import * as React from 'react';

import MainStore from 'src/stores/mainStore';

import {observer} from 'mobx-react';

@observer
class CenterPartThree extends React.Component {

    public render() {

        return (
            <div className="jumbotron jumbAreaTwo">
                <div className="row">
                    <div className="col-3 text-center">
                        <img className="img-fluid" src={require('../../assets/bottle2.png')}/>
                    </div>
                    <div className="col-9 text-left infoArea">
                        <h4>{MainStore.wines[1].name}</h4>
                        <hr/>
                        <p>{MainStore.wines[1].detail[0]}</p>
                        <p>{MainStore.wines[1].detail[1]}</p>
                        <p>{MainStore.wines[1].detail[2]}</p>
                        <p>{MainStore.wines[1].detail[3]}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default CenterPartThree;