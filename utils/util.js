const week = (day) => {
    switch (day) {
        case 0:
            day = '日';
            break;
        case 1:
            day = '一';
            break;
        case 2:
            day = '二';
            break;
        case 3:
            day = '三';
            break;
        case 4:
            day = '四';
            break;
        case 5:
            day = '五';
            break;
        case 6:
            day = '六';
            break;

    }
    return day;
}
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
const time = (date)=>{
    let timeData = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        today: date.getDate(),
        day: week(date.getDay()),
        hour: formatNumber(date.getHours()),
        min: formatNumber(date.getMinutes()),
        sec: formatNumber(date.getSeconds()),
    }
    return timeData;
}


module.exports = {
    time: time,
}