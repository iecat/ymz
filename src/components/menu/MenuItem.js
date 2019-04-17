import React from 'react';
export default class MenuItem extends React.Component {
    render()
    {
       return ( 
            <a>
                {this.props.title}
            </a>
        )
    }
}