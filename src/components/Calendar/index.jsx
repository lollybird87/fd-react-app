import React from 'react';
import Month from './Month';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    return <Month year={currentDate.getFullYear()} month={currentDate.getMonth()} />;
  }
}
export default Calendar;
