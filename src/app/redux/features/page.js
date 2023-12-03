"use client"
import React from "react";
import store from "../store/page";
import { Provider } from "react-redux";

 function ReduxProvider ({children}){
    return <Provider store = {store}>
        {children}
        </Provider>
}

export default ReduxProvider