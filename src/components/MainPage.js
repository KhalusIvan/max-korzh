import React from 'react'
import { Social } from './Social';
import { MainCenter } from './MainCenter';

export const MainPage = (props) => {
    return (
        <div>          
            <Social />
            <MainCenter setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad} />           
        </div>
    )
}
