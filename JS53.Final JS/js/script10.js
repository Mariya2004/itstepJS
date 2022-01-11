// 10. Дана дата и число K. Определить день недели, который будет через K дней от данной даты.

function getDateNext(date, K) {
    let now = new Date(date);
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    now.setDate(date.getDate() + K);
    
    return days[now.getDay()];
  }
  let date = new Date(2022, 0, 3)
  console.log(getDateNext(date, 3));