import React from 'react';
import createStore from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import EogHeader from './components/EogHeader';
import MainLayout from './components/EogLayout';
import Metrics from './Features/Dashboard/Metrics';

const store = createStore();


const MainApp = () => (
  <div>
    <CssBaseline />
    <Provider store={store}>
      <MainLayout>
        <EogHeader />
        <Metrics />
        <ToastContainer />
      </MainLayout>
    </Provider>
  </div>
);

export default MainApp;
