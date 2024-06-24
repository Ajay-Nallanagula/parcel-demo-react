import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import ReactParcelComponent from "./reactParcel.component";

const myParcel = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ReactParcelComponent, //This is a React Parcel component
  // errorBoundary(err, info, props) {
  //   // Customize the root error boundary for your microfrontend here.
  //   return null;
  // },
});

//Parcels have a default property name, we can override the name as below
export const name = "parcelDemo-reactparcel";

export const { bootstrap, mount, unmount } = myParcel;
