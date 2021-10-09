const getCurrentDay = () => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
       
    const date = new Date();
    const currentDay = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return currentDay;
}

const getDatesFromStr = (str) => {
    const dates = str.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);
    return dates === null ? [] : dates;
}

export default { getCurrentDay, getDatesFromStr };