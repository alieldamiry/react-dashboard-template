import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import {  StarBorder } from "@mui/icons-material";

const useStyles = makeStyles((theme: any) => ({
  listItemIcon: {
    minWidth: "35px",
    color: "inherit",
  },
  listItemClass: {
    textDecoration: "none",
    color: "inherit",
    textTransform: 'capitalize'
  },
  nested: {
    paddingLeft: theme.spacing(3.5),
    background:" rgba(0,0,0,0.2)"
  },
  links: {
    color: "#fff !important",
    margin:" auto",
    opacity : "0.5 !important",
    display: "block",
   },
  active: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff !important",
    display: "block",
    opacity : "1 !important",
   
     borderRadius:" 8px",
     width: "90%",
  },


  // imgIcon:{
  //   height: "20px"
  // },

}));

interface SidebarLinkPropTypes {
  icon?: React.ReactNode;
  text: string;
  to: string;
  isNested?: boolean;
}

const SidebarLink: React.FC<SidebarLinkPropTypes> = ({
  icon = <StarBorder />,
  text,
  to,
  isNested = false,
}) => {
  const classes = useStyles();
  return (
    <NavLink className={({ isActive }) => classes.links + (isActive ? classes.active : "")} to={to}>
      <ListItem button className={isNested ? classes.nested : ""}>
        <ListItemIcon className={classes.listItemIcon}>
          {icon}
        {/* <img src={cart} className={classes.imgIcon} /> */}
        </ListItemIcon>
        <ListItemText primary={text} className={classes.listItemClass} />
      </ListItem>
    </NavLink>
  );
};

export default SidebarLink;
