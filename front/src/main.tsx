import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "bootswatch/dist/Darkly/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
