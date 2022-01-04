import React from 'react';
import { Link } from 'react-router-dom';
import  './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link className='title' to='/'> kath-pencile quiz Hub </Link>
            <hr className='divider'/>
            <div style={{display:'flex'}}>
            <Link style={{margin:4}} to='/'>Home</Link>
            <Link style={{margin:4}} to='quiz/'>Quiz</Link>
            <Link style={{margin:4}} to='result/'>Result</Link>
            </div>
           
        </div>
    );
};

export default Header;