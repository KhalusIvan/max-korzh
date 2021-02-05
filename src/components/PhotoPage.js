import React from 'react'
import { Social } from './Social';
import { Photo } from './Photo';

export const PhotoPage = (props) => {
    return (
        <div>
            <Social />
            <Photo setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad}  />
        </div>
    )
}
