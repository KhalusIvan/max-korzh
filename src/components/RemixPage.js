import React from 'react'
import { Social } from './Social';
import { Remix } from './Remix';

export const RemixPage = (props) => {
    return (
        <div>
            <Social />
            <Remix setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad} />
        </div>
    )
}
