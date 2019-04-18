import React from 'react';
export default class CarouselButton extends React.Component {
    render()
    {
        var buttonClass = this.props.buttonStatus+"--btn";
       return ( 
           <div className={buttonClass}>
           </div>
        )
    }
}