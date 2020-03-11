import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { store } from '../index';

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

    function submitForm(event) {
        event.preventDefault();
        const userData = [
            {
                "username": "User_1",
                "search_history": ['casual shirts', 'casual shirts for men', 'allen solly shirts', 'allen solly pants', 'casual checkered shirts for men', 'checkered shirts', 'denim shirts', 'medium size shirts for men', 'blue t-shirt', 'black plain shirt', 'graphic t-shirt', 'black kurta', 'wrangler shirts']
            },
            {
                "username": "User_2",
                "search_history": ['cycling shorts for women', 'lycra cotton shorts', 'alisha shorts', 'aw bellies', 'bellies for general occasions', 'swimdress', 'swimdress for women', 'loafers for women', 'lingeries', 'lehenga', 'jeans', 'lee jeans', 'boots', 'crocs boots', 'carlton boots', 'bootwale bellies of PU material']
            },
            {
                "username": "User_3",
                "search_history": ['cars mat', 'engine oil', 'white sneakers', 'toyota innova headlights', 'kids shoes', 'blouse material', 'jeans for boys', 'biker boys t-shirt']
            },
            {
                "username": "User_4",
                "search_history": ['voylla necklace', 'voylla alloy necklace', 'karatcraft bangle set', 'Awari necklace', 'alloy necklace']
            }
        ];
        let auth = false;
        userData.map((data) => {
            if (data.username === event.target[0].value) {
                auth = true;
                store.dispatch({ type: 'LOGIN_SUCCESS', payload: { auth: true, user: data.username } });
            }
            return data;
        });
        if (!auth) {
            alert('UnAuthorised')
        }
        handleClose();
    }
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
                    <h2 id="simple-modal-title">User Login</h2>
                    <form onSubmit={(event) => submitForm(event)}>
                        <label style={{ margin: '10px' }} htmlFor="username">Username</label>
                        <Input name="username" type="text" margin="dense"></Input>
                        <br />
                        <label style={{ margin: '10px' }} htmlFor="password">Password</label>
                        <Input name="password" type="password" margin="dense"></Input>
                        <br />
                        <Button color="primary" type="submit">Login</Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default Login;
