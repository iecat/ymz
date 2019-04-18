import React from 'react';
export default class CarouselItem extends React.Component {
    render()
    {
      var addedClasses = "item "+ this.props.activClass;

       return ( 
            <div className={addedClasses}>
              <img src={require('../../resources/imgs/'+ this.props.imgName)} alt =""/>
              <div>
                <h1>{this.props.title}</h1>
                <h5>{this.props.subtitle}</h5>
              </div>
            </div>
        )
    }
}