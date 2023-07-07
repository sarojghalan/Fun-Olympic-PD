import ScheduleCard from "../Components/Card/ScheduleCard";
import Title from "../Components/Title/Title";
const scheduleArr = [
  {
    title: "Archery",
    date1: "2023-01-01",
    date2: "2023-01-02",
    date3: "2023-01-03",
    date4: "2023-01-04",
    time1: "09:00 AM ",
    time2: "10:30 AM ",
    time3: "02:15 PM ",
    time4: "05:45 PM ",
  },
  {
    title: "Swimming",
    date1: "2023-02-01",
    date2: "2023-02-02",
    date3: "2023-02-03",
    date4: "2023-02-04",
    time1: "08:30 AM ",
    time2: "11:00 AM ",
    time3: "03:45 PM ",
    time4: "06:30 PM ",
  },
  {
    title: "Jalvin",
    date1: "2023-03-01",
    date2: "2023-03-02",
    date3: "2023-03-03",
    date4: "2023-03-04",
    time1: "09:15 AM ",
    time2: "12:30 PM ",
    time3: "04:00 PM ",
    time4: "07:15 PM ",
  },
  {
    title: "Marathon",
    date1: "2023-04-01",
    date2: "2023-04-02",
    date3: "2023-04-03",
    date4: "2023-04-04",
    time1: "10:45 AM ",
    time2: "01:30 PM ",
    time3: "05:00 PM ",
    time4: "08:45 PM ",
  },
];

function Schedule() {
  return (
    <div className="overall__wrapper">
      <Title title="Match Schedule" />
      <div className="container">
        <div className="schedule__wrapper">
          {scheduleArr?.map((item, keys) => (
            <ScheduleCard
              title={item?.title}
              date1={item?.date1}
              date2={item?.date2}
              date3={item?.date3}
              date4={item?.date4}
              time1={item?.time1}
              time2={item?.time2}
              time3={item?.time3}
              time4={item?.time4}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
