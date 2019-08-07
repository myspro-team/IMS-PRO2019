import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

// Create an enhanced history that syncs navigation events with the store
export const store = configureStore();

function Root() {
    return (
        <div className="wrapper">
        <Provider store={store} >
            {routes}
        </Provider>
        </div>
    );
}

export default Root;