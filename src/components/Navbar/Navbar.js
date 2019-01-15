import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import './Navbar.scss';


function Navbar() {
    return (
        <div className="navbar">
            <AppBar position="absolute" color="primary">
                <Toolbar>
                    <figure>
                        <img src='https://image.flaticon.com/icons/svg/1087/1087803.svg' className="logo-moneyController" alt="money-controller" />
                    </figure>
                    <Typography variant="h6" color="inherit">
                        Organizador Financeiro
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navbar