import React from "react";
import classes from "./Whowillwin.module.scss";
import Button from "react-bootstrap/Button";

const Whowillwin = (props) => {
  const { team1, team2 } = props;

  const onSubmithandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes["who_will_win_box"]}>
      <h4 className={classes.title}>Who Will Win ?</h4>
      <form className={classes["prediction_form"]} onSubmit={onSubmithandler}>
        <div className={classes["team_option_selection"]}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value={team1._id}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              {team1.name}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value={team2._id}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              {team2.name}
            </label>
          </div>
        </div>

        <div className={classes["voteBtn"]}>
          <Button variant="success">Vote</Button>
        </div>
      </form>
    </div>
  );
};

export default Whowillwin;
