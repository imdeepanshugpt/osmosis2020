import axios from 'axios';

const shopping = axios.create({
    baseURL: 'http://localhost:5100'
});

const apiPaths = {
    search: "/mindtree/makeathon/search/v1.0/search"
};

const searchProducts = async (data) => {
    const response  = await shopping.post(apiPaths.search, data);
    console.log('response', response);
    return response;
}
export { searchProducts };