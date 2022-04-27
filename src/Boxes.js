import React, { Component } from 'react';
import './Boxes.scss';
import annie from './images/image-anne.jpg';
import colton from './images/image-colton.jpg';
import irene from './images/image-irene.jpg';
import Box from './Box';

class Boxes extends Component{
    static defaultProps = {
        testimonies: [
            {
                pic: colton,
                fname: 'Colton Smith',
                desc: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
            },
            {
                pic: irene,
                fname: 'Irene Roberts',
                desc: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
            },
            {
                pic: annie,
                fname: 'Anne Wallace',
                desc: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
            },
        ]
    }
    render(){
        return(
            <div className='Boxes'>
                {this.props.testimonies.map((el, idx) => <Box buyer={el} goDown={idx}/>)}           
            </div>
        );        
    }
}

export default Boxes;