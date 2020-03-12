import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Footer = () => {
    return (
        <div className="footer" >
            <AppBar color="primary" position="static">
                <Toolbar style={{ flexFlow: 'column' }}>
                    <p>&copy; Osmosis 2020</p>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer;