import * as React from 'react';

import MainStore from 'src/stores/mainStore';

import { observer } from 'mobx-react';

@observer
class CenterPartEight extends React.Component {


    public render() {
        
        return (
            <div className="jumbotron jumbAreaTwo">
                <div className="row">
                    <div className="col-3 text-center">
                        <img className="img-fluid" src={require('../../assets/bottle7.png')}/>
                    </div>
                    <div className="col-9 text-left infoArea">
                        <h4>{MainStore.wines[6].name}</h4>
                        <hr/>
                        <p>{MainStore.wines[6].detail[0]}</p>
                        <p>{MainStore.wines[6].detail[1]}</p>
                        <p>{MainStore.wines[6].detail[2]}</p>
                        <p>{MainStore.wines[6].detail[3]}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default CenterPartEight;