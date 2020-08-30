import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import './Home.css';
function Home(){
    return(
        <div className="home">
            <div className="home_left">
                <div className="home_sidebar">
                <div className="home_sidebaricon"><CreateOutlinedIcon className="icon" fontSize="large" /><p>Notes</p></div>
               <div className="home_sidebaricon"><NotificationsNoneOutlinedIcon className="icon" fontSize="large" /><p>Reminder</p></div> 
                <div className="home_sidebaricon"><DeleteOutlineOutlinedIcon className="icon" fontSize="large" /><p>Trash</p></div>
                </div>
               
            </div>
            <div className="home_right">
                <input className="home_input" type="text" placeholder="Take a Note..."/>
                <button className="home_addbutton" type="submit">ADD</button>

            </div>
            
        </div>
    )
}
export default Home;