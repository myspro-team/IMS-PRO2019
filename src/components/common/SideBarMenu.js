import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuSettingComponent from './MenuSetting.component';

class SideBarMenuComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            open : true,
        }
    }

    handleDrawerOpen = () => {
        this.setState({
            open : true
        })
    }

    handleDrawerClose = () => {
        this.setState({
            open : false
        })
    }

    render() {

        var { open } = this.state
        let { children } = this.props

        return (
            <div className='aaa'>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={ open === true ? 'appBar appBarShift' : 'appBar' }
                >
                    <Toolbar className="toolbar-cus" >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={ this.handleDrawerOpen }
                            className='menuButton'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography varian5t="h6" noWrap>
                            Internship Managements
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className='drawer'
                    variant="persistent"
                    anchor="left"
                    open={ open }
                    classes = {{paper : 'paperDrawer'}}
                >
                    <div className='drawerHeader'>
                        <IconButton onClick={ this.handleDrawerClose } >
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <MenuSettingComponent />
                    </List>
                </Drawer>
                <main
                    className={ open === true ? 'content contentShift' : 'content' }
                >                    
                   { children }
                </main>
            </div>
        )
    }
}

export default SideBarMenuComponent;
