import React from 'react'
import { Social } from './Social';
import { Concerts } from './Concerts';

export const ConcertsPage = (props) => {
    return (
        <div>
            <Social />
            <Concerts setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad} />
        </div>
    )
}
