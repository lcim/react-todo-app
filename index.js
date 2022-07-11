import React from 'react';
import ReactDOM from 'react-dom';
// component file below
import TodoContainer from './functionBased/components/TodoContainer';
//stylesheet
import "./functionBased/App.css"
/*
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(<React.StrictMode>
    <BrowserRouter><TodoContainer /></BrowserRouter>
</React.StrictMode>, document.getElementById("root"));
*/
// OR
import { BrowserRouter as Router } from "react-router-dom"
ReactDOM.render(<React.StrictMode>
    <Router><TodoContainer /></Router>
</React.StrictMode>, document.getElementById("root"));