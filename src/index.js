import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#344955",
            light: "#bfe3f5",
            dark: "#232f34"
        },
        secondary: {
            main: "#f79e02",
        },
    },
    shape: {
        borderRadius: 0
    },
    typography: {
        fontFamily: 'Montserrat'
    }
});

ReactDOM.render(

    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,

    document.getElementById('root'));