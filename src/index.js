import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";
import { AuthProvider } from "./context/AuthContext";
import { HistoryProvider } from "./context/HistoryContext";
import { LikeProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <HistoryProvider>
            <LikeProvider>
              <App />
            </LikeProvider>
          </HistoryProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
