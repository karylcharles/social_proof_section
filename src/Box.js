import React, { Component } from 'react';
import './Box.scss';

class Box extends Component{
    render(){
        return(
            <div className='Box' style={{
                position: 'relative',
                top: `${this.props.goDown * 20}px`
            }}>
                <div className='Box-profile'>
                    <div className='Box-profile__pic'>
                        <img src={this.props.buyer.pic} alt={this.props.buyer.fname}/>
                    </div>            
                    <div className='Box-profile__text'>
                        <p className='Box-profile__text-name'>{this.props.buyer.fname}</p>
                        <p className='Box-profile__text-title'>Verified Buyer</p>
                    </div>
                </div>
                <div className='Box-content'>
                    <p>{this.props.buyer.desc}</p>
                </div>
            </div>
        );
    }
}

export default Box;