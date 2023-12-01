import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GluestackUIProvider config={config}>
            <App/>
        </GluestackUIProvider>
    </React.StrictMode>
);