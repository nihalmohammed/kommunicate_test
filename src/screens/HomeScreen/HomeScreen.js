import React from 'react';
import './home-screen.scss';
import logo from '../../assets/kommunicate_logo.svg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const HomeScreen = (props) => {

    

    return (
       <div className='home-screen'>
            <img src={logo} alt={"logo"}/>
            <div className='center-div'>
                <Link  to="updates" >
                    <Button name="Update" color="white"/>    
                </Link>    
            </div>
        </div>
    );
}
export default HomeScreen;