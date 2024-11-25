import React from 'react'

import { useLocation } from "react-router-dom";
import { Header } from '../components/Miscellaneous/Header';
import { useHistory } from "react-router-dom";



const KnowledgeBlogs = () => {
    const location = useLocation();

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
                HeaderTitle={location.state.title}
                onBackArrow={onBackArrow}
            />

            <div className="container pb-5 mt-80 " dangerouslySetInnerHTML={{ __html: location?.state?.description }}>

            </div>




        </div>
    )
}

export default KnowledgeBlogs