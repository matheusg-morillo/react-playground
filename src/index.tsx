import React from "react"
import ReactDOM from "react-dom/client"
import { Ecommerce } from "./zustand/App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <Ecommerce />
  </React.StrictMode>,
)
