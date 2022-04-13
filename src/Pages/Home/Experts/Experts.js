import React, { useState } from 'react';
import Expert1 from '../../../images/experts/expert-1.jpg';
import Expert2 from '../../../images/experts/expert-2.jpg';
import Expert3 from '../../../images/experts/expert-3.jpg';
import Expert4 from '../../../images/experts/expert-4.jpg';
import Expert5 from '../../../images/experts/expert-5.jpg';
import Expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Carry', img: Expert1 },
    { id: 2, name: 'Merry Lis', img: Expert2 },
    { id: 3, name: 'Jhon Cris', img: Expert3 },
    { id: 4, name: 'Larry Paul', img: Expert4 },
    { id: 5, name: 'Stave Json', img: Expert5 },
    { id: 6, name: 'Hanry Gail', img: Expert6 },
]

const Experts = () => {
    return (
        <div id='experts'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className="row mt-3">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;