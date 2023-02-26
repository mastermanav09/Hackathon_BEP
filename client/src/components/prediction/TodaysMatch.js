import React from "react";
import classes from "./TodaysMatch.module.scss";

const TodaysMatch = (props) => {
  const { team1, team2, date } = props;

  console.log(date);
  return (
    <div className={classes.wrapper}>
      <h2 className={classes["today_match_title"]}>Today's Match</h2>
      <div className={classes.main}>
        <img src={team1.imgUrl} alt="team1" />
        <div className={classes["vs_img_block"]}>
          <img src="/images/vs.webp" alt="vs_image" />
        </div>
        <img src={team2.imgUrl} alt="team1" />
      </div>
    </div>
  );
};

export default TodaysMatch;
