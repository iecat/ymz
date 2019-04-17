import React from 'react';
export default class Header extends React.Component {
    render()
    {
       return ( 
        <div className="header">
            <img src={require('../resources/imgs/logo.png')} alt ="" className ="logo"/>
            <span>Delicious Cakes</span>
        </div>
        )
    }
}

