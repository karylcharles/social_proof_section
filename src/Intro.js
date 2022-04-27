import React, { Component } from 'react';
import './Intro.scss';
import Ratings from './Ratings';

class Intro extends Component{
    static defaultProps = {
        review: [
            'Rated 5 Stars in Reviews',
            'Rated 5 Stars in Report Guru',
            'Rated 5 Stars in BestTech'
        ]    
    }
    render(){
        return(
            <div className='Intro'>
                <div className='Intro-content'>
                    <h2>10,000+ of our users love our products.</h2>
                    <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                </div>
                <div className='Intro-ratings'>
                    {this.props.review.map((el, idx, arr) =>{
                        const nums = [2, 1, 0];
                        return <Ratings stars={5} text={el} indent={nums[idx]}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Intro;