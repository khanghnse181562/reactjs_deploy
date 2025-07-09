// Student Component (Note: Component must have the first letter is Capital)
import { Fragment } from "react";
import styles from './App.module.css';
const Student = (props) => {
    return (
      <Fragment>
        <p className={styles.textbox}>Welcome {props.name} to Study tonight</p>
        <p><b>This is my hometown:</b> {props.place}</p>
        <p><b>Rollno:</b> {props.rollno}</p>
        <hr/>
      </Fragment>
  )
  }
  export default Student;