import React from 'react';
import Router from '../src/router/appRouter';
import { Provider } from 'react-redux';
import store from './store';
import { persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router></Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
