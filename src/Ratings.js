import React, { Component } from 'react';
import './Ratings.scss';
import star from './images/icon-star.svg';

class Ratings extends Component{

    render(){
        const allStars = new Array(this.props.stars).fill(0);
        return(
            <div className='Ratings' style={{
                position: 'relative',
                right: `${this.props.indent * 40}px`
            }}>
                <div className='Ratings-stars'>
                    {allStars.map(el => <img className='star' src={star} alt="star"/>)}
                </div>
                <div className='Ratings-text'>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Ratings;