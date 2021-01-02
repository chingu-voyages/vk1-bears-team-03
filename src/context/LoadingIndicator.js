import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker"
import Loader from 'react-loader-spinner';



const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress && 
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="#321FDB" height="50" width="50" />
    </div>
    );  
}

export default LoadingIndicator
