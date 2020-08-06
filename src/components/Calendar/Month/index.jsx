import React from 'react';
import Week from './../Week';
import { getWeeksInMonth, getWeek } from 'date-fns';

const getWeeks = date => {
  const firstWeek = getWeek(date);
  const weeksCount = getWeeksInMonth(date);
  const weeks = [];
  for (let i = firstWeek; i < firstWeek + weeksCount; ++i) {
    weeks.push(<Week year={date.getFullYear()} week={i} />);
  }
  return weeks;
};

function Month(props) {
  const { year, month } = props;

  return <div> {getWeeks(new Date(year, month, 1))} </div>;
}

export default Month;
