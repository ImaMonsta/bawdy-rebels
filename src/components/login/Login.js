import React, { Component } from 'react';
import {Button, AppBar, Toolbar, TextField, IconButton, Typography} from 'material-ui';
import { Menu as MenuIcon } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
      marginTop: theme.spacing.unit * 2,
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });

class Login extends Component{
    
    render(){
        const { classes } = this.props;
        return(
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}/>
                        <Button >Login</Button>
                    </Toolbar>
                </AppBar>
                <br/>
                <TextField
                    id="username"
                    label="Username"
                    margin="normal" />
                <br/>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    margin="normal" />
                <br/>
                <Button raised label="Submit" color="accent">
                    Login
                </Button>
            </div>
        );
    }
}


export default withStyles(styles)(Login);