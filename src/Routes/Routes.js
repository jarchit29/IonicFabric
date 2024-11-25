import { IonRouterOutlet } from "@ionic/react";
import { useEffect, useState } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import HomePage from "../components/Home Page/HomePage";
import KnowYourHeart from "../pages/KnowYourHeart";

import KnowledgeBlogs from "../pages/KnowledgeBlogs";
import INRClinic from "../pages/INRClinic";
import IsItHeartAttack from "../pages/IsItHeartAttack";
import { Questions } from "../pages/Questions";

// import  MapContainer from "../AppComponent/GetDirections";

function Routes() {
  const [firstTimeOnboarding, setfirstTimeOnboarding] = useState();
  const dispatch = useDispatch();

  //checking if auth is true, skip login component
  // useEffect(() => {
  //   let authentication = JSON.parse(localStorage.getItem("auth") || "{}");
  //   if (authentication === "true") {
  //     dispatch(login(true));
  //   }
  // });
  // const { auth } = useSelector((state) => state.Authentication);

  //to check if app is opened on first time or not. Get the saved value from local storage.
  useEffect(() => {
    setfirstTimeOnboarding(localStorage.getItem("firstTimeOnboarding"));

    // console.log("firstTimeOnboarding", firstTimeOnboarding);
  }, []);

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <>


          {/* 
          {firstTimeOnboarding === "false" ? (
            <Route exact path="/" component={Welcome} />
          ) : (
            <Route exact path="/" component={OnboardingScreen} />
          )} */}


          <Route exact path="/" component={Welcome} />

          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/KnowYourHeart" component={KnowYourHeart} />
          <Route exact path="/KnowledgePage" component={KnowledgeBlogs} />
          <Route exact path="/INRClinic" component={INRClinic} />
          <Route exact path="/IsItHeartAttack" component={IsItHeartAttack} />
          <Route exact path="/Questions" component={Questions} />
          



        </>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default Routes;
