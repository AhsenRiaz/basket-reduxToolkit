import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ProductItem } from '../interfaces/global';
import logo from "./images/logo.webp"



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function Header() {
    const classes = useStyles();
    const products = useSelector((state:ProductItem[]) => state)
    const product = products.filter((item) => (item.added)).length
    console.log("pppproduct" , product)

    return (
        <div className="Header_container">

            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        
                        <Typography variant="h6" className={classes.title}>
                        <Link to = "/">
                            <img width = "140px" height = "60px" src={logo} alt=""/>
                            </Link>
                        </Typography>
                       
                        <Link to="/">
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Link to="/cart">
                            <Button color="inherit"> <ShoppingCartIcon /> <span className="counter">{product}</span>  </Button>

                        </Link>

                    </Toolbar>
                </AppBar>
            </div>

        </div>
    )
}

export default Header
