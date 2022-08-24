import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function Adduser(props) {
  function addUserHandler(event) {
    event.preventDefault();
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="username">Age(years)</label>
        <input id="username" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default Adduser;
