import React, { useState } from 'react';
import './app-settings-screen.scss';
import logo from '../../assets/kommunicate_logo.svg';
import product_test from '../../assets/product_intro_image.svg';
import Button from '../../components/Button/Button';

const AppSettingsScreen = (props) => {
    
    const [isSuccess,setIsSuccess] = useState("sucess");
    
    return (
       <div className='app-settings-screen'>
            <div className='nav-bar'>
                <img src={logo}  />
            </div>
            <div className='content-container'>
                <h2>Adding live chat on your wordpress website is as easy as it gets.</h2>
                <h3 style={{marginTop:16}}>Leverage the chatbot & live chat to interact with your website visitor and customers 24/7 by following these steps:</h3>
                <div className='product-intro-container'>
                    <div className='product-intro-intruction'>
                        <ul>
                            <li>Login to your kommunicate app and navigate to the setting-> install section and copy the APP_ID to update below</li>
                        </ul>
                        <div className='support-check-box'>
                            <h4>Enter your APP_ID to enable chat-based support in your product</h4>
                            <input type="text" name="name" className='app_id_input_box' />
                            <Button name="Save changes" color="violet"/>
                            {
                                isSuccess=="success"?
                                <p>Changes saved successfully!</p>:
                                isSuccess=="failure"?
                                <p>Invalid App ID</p>:
                                null
                                
                            }
                        </div>
                        <ul style={{marginTop:56}}>
                            <li>Voila! Live chat is now active on your website.</li>
                            <li>Open the website, refresh it and check out the chat plugin. You will find it in the bottom-right corner.</li>
                            <li>You might need to clear cache if your using any cache plugin to see your updates.</li>
                        </ul>
                    </div>
                    <div className='product-intro-image'>
                        <img src={product_test} className="fluid" />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <h5>For support, please contact us via chat on our website or reach out to <a>support@kommunicate.io</a>.</h5>
            </div>
        
        </div>
    );
}
export default AppSettingsScreen;