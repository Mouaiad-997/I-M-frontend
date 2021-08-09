import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "../../../Assets/CSS/styles.css";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AvatarImage = (props) => {
  const classes = useStyles();

  return (
    <div className="image-section">
      <Avatar alt={props.alt} className={classes.large}>
        {props.icon}
      </Avatar>
    </div>
  );
};
export default AvatarImage;
