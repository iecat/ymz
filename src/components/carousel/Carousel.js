import React from 'react';
import CarouselItem from './CarouselItem'
import CarouselButton from './CarouselButton'

export default class Carousel extends React.Component 

{
    constructor(props)
    {
        super(props);
        this.state = {
            currentSlide : 0
        }
        this.showSlide = this.showSlide.bind(this);
    }

    render()
    {
       return ( 
            <div className="carousel">
                <CarouselItem imgName="slide5.jpg" title={"Deliciouse faff"} subtitle={"test"} activClass = {this.setActive(0)}></CarouselItem>
                <CarouselItem imgName="slide5.jpg" title={"Deliciouse cakes"} subtitle={"test 2"} activClass = {this.setActive(1)}></CarouselItem> 

                <div className="carousel-dot">
                    <CarouselButton buttonStatus={this.setActive(0)} onClick = {()=>this.showSlide(0)}></CarouselButton>
                    <CarouselButton buttonStatus={this.setActive(1)} onClick = {()=>this.showSlide(1)}></CarouselButton>
                </div>

            </div>
        )
    }

    setActive(index)
    {
        return this.state.currentSlide === index ? 'active': 'hide'
    }

    showSlide(index)
    {
        console.log(index);
        this.setState({
            currentSlide: index
        });
    }
}