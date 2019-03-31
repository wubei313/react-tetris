import React from 'react';
import ReactDOM from 'react-dom';
import Tetris from './Tetris';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'

const App = (
    <Provider store={store} >
        <Tetris />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
