import { observer } from 'mobx-react';
import * as React from 'react';
import MainStore from 'src/stores/mainStore';

import Stolt from './components/main/stoltIndex';

import './App.css';



@observer
export default class App extends React.Component {
 
  public render() {
    return (
      <div className="container">
      <Stolt />
      </div>
    );
  }
}

