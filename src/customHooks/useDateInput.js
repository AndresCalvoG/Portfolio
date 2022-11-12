import { useState } from "react";

function useDateInput(value) {
  
  const days = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
  const months = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];

    let dateTime = value.text.includes('T')?value.text.split("T"):[value.text, '00:00'];
    let arrayDate = dateTime[0].split("-");
    let arrayTime = dateTime[1].split(":");
    let d = new Date(
      arrayDate[0],
      arrayDate[1] - 1,
      arrayDate[2],
      arrayTime[0],
      arrayTime[1]
    ); // dia 86400000

    let dateObj = {
      text: value.text,
      millis: Date.parse(d),
      dayNumber: d.getDate(),
      dayName: days[d.getDay()],
      day: d.getDay(),
      month: months[d.getMonth()],
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      seconds: d.getSeconds(),
      error: false,
      message: "",
    };
    const [objDate, setObjDate] = useState(dateObj);

  const getObjDate = (newValue)=>{
    let dateTime = newValue.text.includes('T')?newValue.text.split("T"):[newValue.text, '00:00'];
    let arrayDate = dateTime[0].split("-");
    let arrayTime = dateTime[1].split(":");
    let d = new Date(
      arrayDate[0],
      arrayDate[1] - 1,
      arrayDate[2],
      arrayTime[0],
      arrayTime[1]
    ); // dia 86400000

    let dateObj = {
      text: newValue.text,
      millis: Date.parse(d),
      dayNumber: d.getDate(),
      dayName: days[d.getDay()],
      day: d.getDay(),
      month: months[d.getMonth()],
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      seconds: d.getSeconds(),
      error: newValue.error,
      message: newValue.message
    };
    setObjDate(dateObj)
  };

  return [objDate, getObjDate];
}

export default useDateInput;
