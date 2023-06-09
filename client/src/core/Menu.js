import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'


const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {color: 'white'}
  else
    return {color: 'white'}
}
const Menu = withRouter(({history}) => (
  <div className="menu" style={{backgroundColor:"#759CC9"}}>
    <h2 className="menutitle">
        Van Life Social Network
      </h2>
      <div className="navbuttons">
      <img style={{width:"7vw",marginLeft:"1vw",transform:"translateY(30%)"}} src={require('./logo.png')} />
      <Link to="/">
        <button style={isActive(history, "/")}>Home</button>
      </Link>
      {(auth.isAuthenticated()&&
      auth.isAuthenticated().user.cool)&&<><Link to="/explanation">
        <button id="explanation">About
        </button>
      </Link>
      </>}
      {
        !auth.isAuthenticated() && (<span>
          <Link style={{marginLeft:"10px",
          marginRight:"5px"}} to="/signup">
            <button id="signup">Sign up
            </button>
          </Link>
          <Link to="/signin">
            <button >Sign In
            </button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (
          <span>
          <Link to={"/singleuser/" + auth.isAuthenticated().user._id}>
            <button style={{marginLeft:"10px",
            marginRight:"5px"}}>My Profile</button>
          </Link>
          <button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</button>

        </span>)
      }
      </div>
  </div>
))

export default Menu
