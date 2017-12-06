const dolarTodayDefaultData = {
    dolartoday: 103190.42
};

export const getDolarTodayData = () => ({
    type: GET_DOLAR_TODAY,
    payload: dolarTodayDefaultData
});