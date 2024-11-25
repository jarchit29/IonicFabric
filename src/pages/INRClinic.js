import React from 'react'
import { Header } from '../components/Miscellaneous/Header'
import { useHistory } from "react-router-dom";

const INRClinic = () => {

    let history = useHistory();

    const onBackArrow = () => {
        // history.push("/HomePage");
        history.goBack();
    };

    return (
        <div>

            <Header
                backArrow={true}
                hamBurgerMenu={false}
                HeaderTitle="Disclaimer"
                onBackArrow={onBackArrow}
            />  

            <div className="container pb-5 mt-80 ">

                <div className='textContent'>
                    The contents of the Heart Assessment Test
                    (HAT/Software) such as, text, graphics, images, information and other material contained in the Software are for educational and/or informational purposes only. The content is not intended to be a substitute for a professional medical advice, diagnosis or treatment. The Software assumes no liability for the results obtained based on the inputs provided by the User. The User must seek the advice of the Physician or qualified Surgeon/Doctor with any questions that the User may have regarding his/her medical condition. The Software is not a substitute of a professional medical advice. Reliance by the User on any information/result provided
                    by the Software, is solely at his/her own risk. The User is advised to never disregard professional medical advice or delay in seeking it because of the information/result the User may have read/obtained on the Software.
                </div>
            </div>

            <div class="bottom-fixed-div">
                <button className='buttonWhite' onClick={()=>{history.goBack()}}>Dicline</button>
                <button className='buttonMix'>Agree</button>
            </div>

        </div>
    )
}

export default INRClinic