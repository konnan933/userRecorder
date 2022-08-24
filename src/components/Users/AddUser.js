import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function Adduser(props) {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim.length === 0) {
      return;
    }
    if (enteredAge < 1) {
      return;
    }
    setEnteredUser("");
    setEnteredAge("");
  }
  const userNameChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUser}
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="username">Age(years)</label>
        <input
          id="username"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default Adduser;
