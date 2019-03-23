import * as React from 'react';

import MainStore from '../../stores/mainStore';

const renderCenter = (render : string) => {
    MainStore.setRender(render);
}

const NavLink = (props : any) => {
    const winesToShow = MainStore
        .wines
        .filter(wine => wine.type == props.type);
    const showWine = winesToShow.map((wine => {
        return (
            <a
                className="dropdown-item"
                href="#nogo"
                onClick={() => renderCenter(wine.renderMethod)}>
                {wine.name}
            </a>
        )
    }));

    return(
        <div>
        {showWine}
        </div>
    )
}

export default NavLink