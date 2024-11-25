//Imports from LIBRARIES
import { useHistory } from "react-router-dom";

//Imports from IMAGES


import welcomeLogo from "../../Style/Images/WelcomeLogo.png";


export const Welcome = () => {


  let history = useHistory();
  let clickGetStarted = () => {


    history.push("/HomePage");

  };

  return (
    <ion-content>
      <div className="welcome-bg ">
        <div className="body center-container ">

          <img className='imgCenter' src={welcomeLogo} onClick={clickGetStarted} />


        </div>
      </div>

    </ion-content>
  );
};
