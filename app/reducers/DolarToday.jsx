export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_DOLAR_TODAY':
            console.log('GET_DOLAR_TODAY')
            return action.payload;
        default:
            return state;
    }
}