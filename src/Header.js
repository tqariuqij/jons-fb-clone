import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar,IconButton  } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
import DrawerToggleButton from './DrawerToggleButton';


const  Header = props => {
    const [{user} , dispatch] = useStateValue();

    return (
        <div className= 'header'>
            
                <DrawerToggleButton click= {props.drawerClickHandler} />
            
            <div className='header_left'>
                <img
                    src='https://res.cloudinary.com/johnte/image/upload/v1609151163/juk_jw6cv1.jpg'
                    alt=''
                />
                <div className= "header_input">
                    <SearchIcon />
                    <input placeholder="search usokitabu" type='text'/>
                </div>

            </div>
            <div className='header_middle'>
                    <div className='header_option header_option--active '>
                        <HomeIcon fontsize='large' />
                    </div>
                    <div className='header_option '>
                        <FlagIcon fontsize='large' />
                    </div>
                    <div className='header_option'>
                        <SubscriptionsOutlinedIcon fontsize='large' />
                    </div>
                    <div className='header_option'>
                        <StorefrontOutlinedIcon fontsize='large' />
                    </div>
                    <div className='header_option'>
                        <SupervisedUserCircleIcon fontsize='large' />
                    </div>
            </div>


            <div className='header_right'> 
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon /> 
                </IconButton>
            </div>
        </div>
    )
}

export default Header
