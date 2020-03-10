const setProducts = (data) => ({
    type: 'SEARCH_PRODUCT',
    payload: data
});

const setLogin = (data) => ({
    type:'LOGIN_SUCCESS',
    payload: data
})

export { setProducts, setLogin};
