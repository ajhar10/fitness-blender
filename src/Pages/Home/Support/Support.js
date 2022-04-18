import React from 'react';
import './Support.css';
import team from '../../../images/support.png';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div className='support-container my-5 container'>
            <h1 className='text-center text-primary'>Supportive Community</h1>
            <p className='text-center'>Stay motivated and engaged with a little help from a supportive community of other members.</p>
            <Link className='text-black fs-5 btn btn-info text-decoration-none' to='/login'>Become a Member</Link>
        </div>
    );
};

export default Support;