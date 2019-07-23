import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
      <div className="page-container">
        <div className="">
        <Link to="/internship"><Button variant="contained" className={classes.button}>Default</Button></Link>
        </div>
      </div>
  );                                  
};
   
export default HomePage;
          