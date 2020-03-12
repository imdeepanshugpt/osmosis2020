import axios from 'axios';

const shopping = axios.create({
    baseURL: 'http://localhost:5100'
});

const apiPaths = {
    search: "/mindtree/makeathon/search/v1.0/search",
    userList: "/mindtree/makeathon/search/v1.0/get_users",
    purchase: "/mindtree/makeathon/search/v1.0/add_purchase",
    getUserDetails: "/mindtree/makeathon/search/v1.0/get_users_detils"
};

const searchProducts = async (data) => {
    const response = await shopping.post(apiPaths.search, data);
    console.log('response', response);
    return response;
}

const getUserList = async () => {
    const response = await shopping.get(apiPaths.userList);
    console.log('response', response);
    return response;
}
export { searchProducts, getUserList };