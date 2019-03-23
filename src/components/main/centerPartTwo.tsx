import * as React from 'react';

import MainStore from 'src/stores/mainStore';

import { observer } from 'mobx-react';

@observer
class CenterPartTwo extends React.Component {


    public render() {
        
        return (
            <div className="jumbotron jumbAreaTwo">
                <div className="row">
                    <div className="col-3 text-center">
                        <img className="img-fluid" src={require('../../assets/bottle.jpg')}/>
                    </div>
                    <div className="col-9 text-left infoArea">
                        <h4>{MainStore.wines[0].name}</h4>
                        <hr/>
                        <p>{MainStore.wines[0].detail[0]}</p>
                        <p>{MainStore.wines[0].detail[1]}</p>
                        <p>{MainStore.wines[0].detail[2]}</p>
                        <p>{MainStore.wines[0].detail[3]}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default CenterPartTwo;