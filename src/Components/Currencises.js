import React, { useState, useEffect } from 'react';
import LogoCard from "../Components/LogoCard";
import SubmitBtn from "../Components/SubmitBtn";
import Logo from "../assets/Logo.png";
import Image1 from "../assets/image 1.svg";
import Add from "../assets/add.svg";
import "./styles.css";
import web3 from 'web3';
import { getCurriencies } from '../Components/Data/Curriencies';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import getIcons from '../Components/Data/Icons'



const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});


function SimpleDialog(props) {
    const [list, setList] = useState([]);
    

    

    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">List of currencies</DialogTitle>
        <List>
          {list.map((item) => (
            <ListItem   button onClick={() => handleListItemClick(item)} key={item.id}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                 
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
  
          <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              
            </ListItemAvatar>
           
          </ListItem>
        </List>
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  



export default function Currencises() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
    
    const [list, setList] = useState([]);
    const [icon, setIcon] = useState(null);
   const [selected , setSelected] =useState();
     
   const Selected =(code)=>{
     setSelected(code); 

   }


    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
      };

    useEffect(() => {
        let mounted = true;
        getCurriencies().then(items => {
            if(mounted) {

            setList(items)

            }
          })
        return () => mounted = false;
        }, [])

    return (
        
        <div className="submitBtxnCon">
          <div className="logoCardCon">
          {
            list.map( item  => (
               item.popular  &&  ( <LogoCard key={item.id}   code ={item.code}   title={item.name} />)
            ))}
         
            <button className="hiddenBtn"  onClick={handleClickOpen} >     
            <LogoCard  CardImg={Add}  /></button>  
            
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            
           
            
            
          </div>
  
          <div className="totalText">
        <span>You will receive  Kishu for 50 </span>
          
          </div>
          <button className="hiddenBtn" >
          <SubmitBtn label="Confirm" />
          </button>
        </div>
            
        
    )
}
