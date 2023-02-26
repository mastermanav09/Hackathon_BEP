import React, { useState, useEffect } from "react";
import TodaysMatch from "../components/prediction/TodaysMatch";
import DatePicker from "react-datepicker";
import classes from "./MakePrediction.module.scss";
import { addDays, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Whowillwin from "../components/prediction/Whowillwin";
import { getMatch } from "../Api";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const MakePrediction = () => {
  const [date, setDate] = useState(new Date());
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRequiredMatch = async () => {
      setIsLoading(true);
      const res = await getMatch(new Date(date));

      if (res.status !== 200) {
        alert("Something went wrong!");
        return;
      }

      setTeam1(res.data[0].team1);
      setTeam2(res.data[0].team2);
      setIsLoading(false);
    };

    getRequiredMatch();
  }, [date]);

  return (
    <div>
      {isLoading || (!team1 && !team2) ? (
        <LoadingSpinner />
      ) : (
        <>
          <TodaysMatch date={date} team1={team1} team2={team2} />
          <Whowillwin team1={team1} team2={team2} />
        </>
      )}

      <div className={classes["selectDateBox"]}>
        <p>Select the date on which you want to see the scheduled matches : </p>
        <div className={classes["dateBox"]}>
          <label>Select Date Here : </label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            includeDateIntervals={[
              {
                start: subDays(new Date("26 Feb 2023"), 0),
                end: addDays(new Date("26 Feb 2023"), 11),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MakePrediction;
