import React from 'react'
import { Social } from './Social';
import { Contacts } from './Contacts';

export const ContactsPage = (props) => {
    return (
        <div>
            <Contacts setIsFirstLoad={props.setIsFirstLoad} isFirstLoad={props.isFirstLoad}  />
        </div>
    )
}
