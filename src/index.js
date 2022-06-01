import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";
import { AuthProvider } from "./context/AuthContext";
import { HistoryProvider } from "./context/HistoryContext";
import { LikeProvider } from "./context/LikeContext";
import { WatchLaterProvider } from "./context/WatchLater";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>         
            <LikeProvider>
              <HistoryProvider>
                <WatchLaterProvider>
                  <App />
                </WatchLaterProvider>
              </HistoryProvider>
            </LikeProvider>         
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
