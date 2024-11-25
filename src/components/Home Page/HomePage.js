import { useState, useEffect, useRef } from "react";
import { Header } from "../Miscellaneous/Header";
import { PropertiesList } from "../Properties/List/PropertiesList";
import { Messages } from "../Messages/Messages";
import { SideMenuItems } from "./SideMenuItems";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { App as app } from "@capacitor/app";
import { setStatus } from "../../redux/AlertStatus";
import AlertOnExit from "../Alerts/AlertOnExit";
import { Capacitor } from "@capacitor/core";
import { createGesture, Gesture } from "@ionic/react";
import IdleTimer2 from "../Miscellaneous/Idletimer2";
import swal from "sweetalert";
import TitleCapsule from "../CardLayouts/TitleCapsule";

// Import images
import heartImage from "../../Style/Images/heartImage.png"


const HomePage = () => {
  //Use State for setting page

  const [page, setPage] = useState(localStorage.getItem("Page"));
  const [showAlert, setShowAlert] = useState(false);

  const swipeGesture = useRef(createGesture({ onMove: true }));


  const dispatch = useDispatch();
  let history = useHistory();


  //TODO: add ionic-alert box to exit app

  useEffect(() => {
    if (Capacitor.isNative) {
      app.addListener("backButton", (e) => {
        if (window.location.pathname === "/HomePage") {
          // Show A Confirm Box For User to exit app or
          dispatch(setStatus(true));
          setShowAlert(true);
        }
      });
    }
  }, []);

  //! setting swipe to go back gesture to false in homepage
  useEffect(() => {
    let gesture = createGesture({
      el: swipeGesture.current,
      threshold: 0,
      gestureName: "my-gesture",
      gesturePriority: 40.5, // priority of swipe to go back is 40
      onMove: (ev) => {
        console.log(ev);
        ev.deltaX > 100 && setShowAlert(true)


      },
    });
    gesture.enable();
  });

  let titleOnHomePage = [{ title: 'Know your Heart' , routeTo: '/KnowYourHeart'}, { title: 'Health Updates ' }, { title: 'Is it Heart Attack? ', routeTo:'/IsItHeartAttack' , totalScreens: '8'}, { title: 'Diets and Excercises ' },{title:'INR clinic', routeTo:'INRClinic'},{title:'Blood Pressure Clinic'},{title:'My records'},]



  return (
    <ion-content ref={swipeGesture}>
      <IdleTimer2 />

      <div>
        <Header HeaderTitle="The Heart" backArrow={false} hamBurgerMenu={true} />


        <div className="container pb-5 mt-80 ">

          {titleOnHomePage.map((item,index) => {
            
       
            return (
              <div className="mt-3" key={item.title + index}>
               
                <TitleCapsule title= {item.title}  onCapsuleClick={() => {history.push(item.routeTo , {title: item.title, totalScreens : item.totalScreens})}}/>

              </div>
            )

          })}
          
        </div>

        {/* <SideMenuItems setPage={setPage} /> */}
        {/* 
        {page === "Properties" && <PropertiesList />}
        {page === "My bids" && <Bids />}
        {page === "My messages" && <Messages />}

        <BottomNavBar setPage={setPage} page={page} /> */}

      </div>

      {showAlert && (
        <AlertOnExit showAlert={showAlert} setShowAlert={setShowAlert} />
      )}

    </ion-content>
  );
};

export default HomePage;
