"use client"
import React from "react";
import { Provider } from "react-redux";
import store from '../../store/store'
import Card from "../../components/Card/Card";

const home = () => {
return(
    <div className="home">
    <Provider store={store}>
    <Card />
    </Provider>
    </div>
)

}
export default home;