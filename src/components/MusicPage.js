import React from 'react'
import { Social } from './Social';
import { Music } from './Music';

export const MusicPage = (props) => {
    return (
        <div>
            <Social />
            <Music setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad} />
        </div>
    )
}
