import React from "react";
import "./Timetable.scss";

const Timetable = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
  ];

  const schedule = {
    Mon: ["Cardio", "Open Gym", "Stretch", "Cardio", "Open Gym", "Stretch"],
    Tue: ["Open Gym", "Stretch", "Cardio", "Open Gym", "Stretch", "Cardio"],
    Wed: ["Stretch", "Cardio", "Open Gym", "Stretch", "Cardio", "Open Gym"],
    Thu: ["Cardio", "Open Gym", "Stretch", "Cardio", "Open Gym", "Stretch"],
    Fri: ["Open Gym", "Stretch", "Cardio", "Open Gym", "Stretch", "Cardio"],
    Sat: ["Stretch", "Cardio", "Open Gym", "Stretch", "Cardio", "Open Gym"],
    Sun: ["Cardio", "Open Gym", "Stretch", "Cardio", "Open Gym", "Stretch"],
  };

  return (
    <div className="timetable wrapper">
      <table>
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, timeIndex) => (
            <tr>
              <td>{time}</td>
              {days.map((day) => (
                <td>{schedule[day][timeIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
