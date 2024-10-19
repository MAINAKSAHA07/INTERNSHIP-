import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment classname=" ">
              <div className="bg-[#FF9933] h-[2rem]">  
              <p>{timerDays}Days: {timerHours}Hrs: {timerMinutes}Min: {timerSeconds}Sec</p>
               </div> 
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;