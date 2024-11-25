import welcomeLogo from "../../Style/Images/heartLogo1.svg";
import { useHistory } from "react-router-dom";

const SlideOne = () => {
  let history = useHistory();
  const handleSkip = () => {
    localStorage.setItem("firstTimeOnboarding", "false");
    history.push("/PortalList");
  };

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
          <img width="64px" height="28px"src={welcomeLogo} alt="welcome logo " />
        </div>
        <div className="prop-detail">
          <h3 className="ff-reg font_20 secondary">
            About Us !
            <span className="ff-bold  font_28 secondary">The Heart App </span>
          </h3>
          <p className="ff-reg font_18 secondary">
            On a mission, to reduce fatalities due to heart diseases, this app aims to help people find out if they are at risk of or are developoing a heart attack based on some questions regarding their complaints.
          </p>
        </div>


        <button
          className="ff-semi skip font_18 secondary"
          onClick={() => {
            // history.push("/PortalList");
            // localStorage.setItem("firstTimeOnboarding", "false");
          alert("Under development");
          }}
        >
          Skip
        </button>

        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default SlideOne;
