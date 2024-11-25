import welcomeLogo from "../../Style/Images/heartLogo1.svg";

import { useHistory } from "react-router-dom";

const SlideTwo = () => {
  let history = useHistory();
  return (
    <>
      <div id="onboardingCntr">

        <div className="wel-logo">

          <div class="loading mt-2">
            <svg width="64px" height="48px" className="mt-2">
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
            </svg>
          </div>

        </div>
        <div className="welcome-logo">
          <img width="64px" height="28px" src={welcomeLogo} alt="welcome logo " />
        </div>
        <div className="prop-detail">
          <h3 className="ff-reg font_20 secondary">
            How to manage INR ? 
            <span className="ff-bold  font_28 secondary">INR </span>
          </h3>
          <p className="ff-reg font_18 secondary">
            'INR' This will help patients of remote region to manage their INR more effectively with the help of their doctors.
          </p>
        </div>
      
        <button
          className="ff-semi skip font_18 secondary"
          onClick={() => {
            history.push("/PortalList");
            localStorage.setItem("firstTimeOnboarding", "false");
          }}
        >
          Skip
        </button>

        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default SlideTwo;
