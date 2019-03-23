import * as React from 'react';

import MainStore from 'src/stores/mainStore';

import { observer } from 'mobx-react';

@observer
class CenterPartFive extends React.Component {


    public render() {
        
        return (
            <div className="jumbotron jumbAreaTwo">
                <div className="row">
                    <div className="col-3 text-center">
                        <img className="img-fluid" src={require('../../assets/bottle4.png')}/>
                    </div>
                    <div className="col-9 text-left infoArea">
                        <h4>{MainStore.wines[3].name}</h4>
                        <hr/>
                        <p>{MainStore.wines[3].detail[0]}</p>
                        <p>{MainStore.wines[3].detail[1]}</p>
                        <p>{MainStore.wines[3].detail[2]}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default CenterPartFive;