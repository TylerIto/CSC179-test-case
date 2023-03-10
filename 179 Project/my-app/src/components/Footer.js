import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction label="Facebook" value="recents" title="Facebook" icon={<FacebookIcon  style={{fill: "#fff"}}/>} />
          <BottomNavigationAction label="Twitter" value="favorites" title="Twitter" icon={<TwitterIcon  style={{fill: "#fff"}}/>} />
          <BottomNavigationAction label="YouTube" value="folder" title="YouTube" icon={<YouTubeIcon  style={{fill: "#fff"}}/>} />
        </BottomNavigation>
)
}

export default Footer