import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
//import { RoutingDemo } from './ClassComponents/RoutingDemo.jsx';
//import { Shoppingindex } from './Shopping-spa/shopping-index.jsx';
import { TutorialIndex } from './tutorial/tutorial-index.js';
//import { ClassBindingComponent } from './Components/class-binding-14/classBinding.jsx';
//import { VerifyPassword } from './Components/verify-password/VerifyDemo.jsx';
//import { Home } from './Components/Home/home.jsx';
// import { LoginClassComponents } from './ClassComponents/LoginComponents.jsx';
// import { StateDemo } from './ClassComponents/setState.jsx';
// import { ClassPropertiesDemo } from './ClassComponents/ClassProperties.jsx';
//import { ConditionalRendering } from './ClassComponents/ConditionlRendaring.jsx';
//import { FormikDemo } from './ClassComponents/FormikDemo.jsx';
//import { YupDemo } from './ClassComponents/yup.jsx';
// import { DataBindingSecondPart } from './Components/data-binding-13/data-binding-2.jsx';
//import { StyleBinding14 } from './Components/style-binding-14/style-binding.jsx';
//import { NetflixIndex } from './Netflix/NetflixIndex';
//import {NasaComponent} from './Components/NasaApi/nasaApi';
 //import {NasaCardComponent} from './Components/nasaApi-cardStyle/nasaapi';
//import {FakestoreComponent} from './Components/fakestore/fakestore'
//import {FakeStore} from './Components/Fakestore-Practice.jsx/fakestorepra.jsx';
// import { StyleBinding } from './Components/style-binding/stylebinding.jsx';
import { CookiesProvider } from 'react-cookie';
import { ReducerDemo } from './reducerDemo/reducerdemo.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <ReducerDemo/>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
