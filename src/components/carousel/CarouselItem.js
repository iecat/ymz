import React from 'react';
export default class CarouselItem extends React.Component {
    render()
    {
       return ( 
            <a>
                {this.props.title}
            </a>
        )
    }
}