import React, { Component } from 'react';
import {Button, AppBar, TextField, Toolbar, Typography, Input} from 'material-ui';

class Login extends Component{
    render(){
        return(
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                    <Typography type="title" color="inherit">
                        Title
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Input placeHolder="Username"/>
                <br/>
                <Input placeHolder="Password"/>
                <br/>
                <Button label="Submit" primary={true} style={style} >
                    Login
                </Button>
            </div>
        );

        
    }
}

const style = {
    margin: 15,
   };

export default Login;