import React, { Component } from 'react';
import { Button, AppBar, Toolbar, TextField, IconButton, Typography, Grid, Avatar } from 'material-ui';
import { Menu as MenuIcon } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';
import { styles } from '../../settings/ThemeConfig';
import Logo from '../../assets/img/logo.png'

class Login extends Component{
    render(){
        return(
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <div>
                        <AppBar position="static" color="primary" className={this.props.classes.appBar}>
                            <Toolbar>
                                <IconButton aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography type="title" color="inherit" className={this.props.classes.flex}/>
                                <Button >sign in</Button>
                            </Toolbar>
                        </AppBar>
                        <br/>
                        <div className={this.props.classes.center}>
                            <div style={{ display: 'flex', justifyContent: 'center',}}>
                        <Avatar alt="Remy Sharp" src={Logo} style={{ width: 200, height: 200, }} />
                        </div>
                            <Typography type="headline" component="h1">I've got a Question?</Typography>
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
                            <br/>
                            <Button label="Submit" color="primary">
                                Login
                            </Button>
                        </div>
                    </div>
            
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Login);