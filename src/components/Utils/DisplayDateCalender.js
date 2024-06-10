import React from "react";
import Calendar from "react-calendar";
import "../Utils/React-calender.css";

const DisplayDateCalender = ({date}) => {
  function convertDateFormat(dateString) {
    // Split the date string into day, month, and year
    const parts = dateString.split("/");
    // Create a new Date object with the parts in YYYY-MM-DD format
    const newDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    // Format the new date as YYYY-MM-DD
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  }


  const CustomNavigation = ({ label }) => {
    return (
      <div className="react-calendar__navigation">
        <button
          style={{
            pointerEvents: "none",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={() => {}}
        >
          {label}
        </button>
      </div>
    );
  };

  return (
    <div>
      <Calendar
        value={convertDateFormat(date)}
        navigationLabel={CustomNavigation}
        prevLabel={null}
        nextLabel={null}
        prev2Label={null}
        next2Label={null}
        onChange={null}
        onViewChange={null}
        onClickDay={null}
        onClickDecade={null}
        onClickMonth={null}
        onClickWeekNumber={null}
        onClickYear={null}
        onDrillDown={null}
        onDrillUp={null}
        showNeighboringMonth={false}


        maxDetail="month"
        minDetail="month"
      />
    </div>
  );
};

export default DisplayDateCalender;
