import React from 'react'

import '../styles/profileIcon.scss'

function ProfileIcon(props) {
    const {iconSize, storyBorder, image} = props;
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomId = getRandomInt(1, 70);
    const profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`

    return (
        <div className={storyBorder ? "story-border" : ""}>
            <img 
                className={`profile-icon ${iconSize}`}
                src={profileImage}
                alt='profile' 
            >
            </img>
        </div>
    )
}

export default ProfileIcon