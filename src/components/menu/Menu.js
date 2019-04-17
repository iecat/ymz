import React from 'react';
import MenuItem from './MenuItem'
export default class Menu extends React.Component {
    render()
    {
       return ( 
            <div className="menu">
                <MenuItem title="Services"></MenuItem>
                <MenuItem title="Products"></MenuItem>
                <MenuItem title="Our team"></MenuItem>
                <MenuItem title="About Us"></MenuItem>
                <MenuItem title="Reviews"></MenuItem>
                <MenuItem title="Contacts"></MenuItem>
            </div>
        )
    }
}