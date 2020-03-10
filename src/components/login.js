import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Login = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="inherit" type="button" onClick={handleOpen}>
                Login</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Login Please</h2>
                    <label style={{ margin: '10px' }} for="username">Username</label>
                    <Input name="username" type="text" margin="dense"></Input>
                    <br />
                    <label style={{ margin: '10px' }} for="password">Password</label>
                    <Input name="password" type="password" margin="dense"></Input>
                    <br />
                    <Button color="primary">Login</Button>
                </div>
            </Modal>
        </div>
    );
}

export default Login;
