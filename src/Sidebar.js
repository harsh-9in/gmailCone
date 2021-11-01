import { Button } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';


function Sidebar(){
    return(
        <div className='sidebar'>
            <Button startIcon={<AddIcon/>} className='sidebar_compose'>
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="inbox" number={54}/>
            
        </div>
    );
}

export default Sidebar;