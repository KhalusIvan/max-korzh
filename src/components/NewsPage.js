import React from 'react'
import { Social } from './Social';
import { News } from './News';

export const NewsPage = (props) => {
    return (
        <>
            <Social />
            <News setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad} />
        </>
    )
}
