import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';

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
const Profile = (props) => {
    function renderUserHistory() {
        return userData.map((data) => {
            if (props.login && (data.username === props.login.user)) {
                return data.search_history.map((item) => {
                    return (
                        <ListItem>
                            <ListItemText primary={item}>
                            </ListItemText>
                        </ListItem>
                    )
                })
            }
            return '';
        })
    }
    return (
        <div>
            <h1>Your Search History</h1>
            <List>
                {props.login && props.login.user ?
                    <h2>User : {props.login.user}</h2>
                    : ''}
                {renderUserHistory()}
            </List>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productData: state.search,
        login: state.login
    }
}
export default connect(mapStateToProps, null)(Profile);