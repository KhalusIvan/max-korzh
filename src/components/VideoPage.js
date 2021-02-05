import React from 'react'
import { Social } from './Social';
import { Video } from './Video';


export const VideoPage = (props) => {
    return (
        <div>
            <Social />
            <Video setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad}  />
        </div>
    )
}
