import React from 'react'
import { Header } from '../components/Miscellaneous/Header'
import { useHistory } from "react-router-dom";
import TitleCapsule from '../components/CardLayouts/TitleCapsule';

const KnowYourHeart = () => {


    let history = useHistory();

    const onBackArrow = () => {
        // history.push("/HomePage");
        history.goBack();
    };

    let knowYourHeart =  [{ title: 'What is a Heart Attack? ' , routeTo: ''}, { title: 'Warning Signs' }, { title: 'Presentation in Women' }, { title: 'What is the Emergency? ' }, { title: 'Tests/ Procedures' },{title:'Treatment of Acute Heart'},{title:'Prevention Strategies'}]

    

    return (

        <div>

            <Header
                backArrow={true}
                hamBurgerMenu={false}
                HeaderTitle="Know Your Heart "
                onBackArrow={onBackArrow}
            />

            <div className="container pb-5 mt-80 ">

                {knowYourHeart.map((item,index) => {


                    return (
                        <div className="mt-3" key={item.title + index}>

                            <TitleCapsule title={item.title} onCapsuleClick={() => { history.push('/KnowledgePage',{title : item.title}) }} />

                        </div>
                    )

                })}


                {/* <div>
                    <button className='button-bottom buttonTextWhite'>
                        Next
                    </button>
                </div>  */}

            </div>
        </div>

    )
}

export default KnowYourHeart