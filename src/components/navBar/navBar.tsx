import MainStore from '../../stores/mainStore';

import NavLink from '../navBar/navLink'

import * as React from 'react';

class NavBar extends React.Component {
    state = {
        isOpen: false,
        isOpenTwo: false
    };
    toggleOpen = () => this.setState({
        isOpenTwo: false,
        isOpen: !this.state.isOpen
    });

    toggleOpen2 = () => this.setState({
        isOpen: false,
        isOpenTwo: !this.state.isOpenTwo
    });
   
    public render() {
        const menuClass = `dropdown-menu${this.state.isOpen
            ? " show"
            : ""}`;
        const menuClassTwo = `dropdown-menu${this.state.isOpenTwo
            ? " show"
            : ""}`;
        return (
            <nav className="navbar navbar-expand-lg navbar-light text-center">
                <div className="row w-100">
                    <div className="col-1">
                        <button
                            className="btn btn-info"
                            onClick={() => MainStore.setRender("home")}>START</button>
                    </div>
                    <div className="col-2">
                        <div className="dropdown dropBtn" onClick={this.toggleOpen}>
                            <button
                                className="btn btn-info dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true">
                                VORES RØDVINE
                            </button>
                            <div className={menuClass} aria-labelledby="dropdownMenuButton">
                                <NavLink type="Red"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="dropdown dropBtn" onClick={this.toggleOpen2}>
                            <button
                                className="btn btn-info dropdown-toggle"
                                type="button"
                                id="dropdownMenuButtonTwo"
                                data-toggle="dropdown"
                                aria-haspopup="true">
                                VORES HVIDVINE
                            </button>
                            <div className={menuClassTwo} aria-labelledby="dropdownMenuButtonTwo">
                            <NavLink type="White"/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default NavBar