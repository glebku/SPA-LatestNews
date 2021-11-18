const getZero = num => {
    if (num < 10 && num > 0) {
        return '0' + num;
    } else {
        return num;
    }
}
export const getDay = date => {
    const newsDate = new Date(date);
    const day = getZero(newsDate.getDate());
    return day;
}
export const getMonth = date => {
    const newsDate = new Date(date);
    const month = getZero(newsDate.getMonth() + 1);
    return month;
}