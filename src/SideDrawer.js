import React from 'react'
import "./Sidebar.css"
import "./SideDrawer.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from './StateProvider';

const SideDrawer =  props => {
    const [{ user}, dispatch] = useStateValue();

    let drawerClasses = 'sidedrawer'
    if (props.show) {
        drawerClasses ='sidedrawer__open'
    }

    return (
        <div className= {drawerClasses}>
            <SidebarRow src={user.photoURL} 
                        title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} 
                        title='COVID-19 Information center'
            />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Expand' />
        </div>
    )
}

export default SideDrawer;