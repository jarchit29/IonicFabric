import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useLocation } from 'react-router'
import { Header } from '../components/Miscellaneous/Header';
import ScreenCount from '../components/ScreenCount';
import TitleCapsule from '../components/CardLayouts/TitleCapsule';
import _ from "lodash";
import * as constants from '../utils/constants';

// Immports related to reducers 
import { useSelector, useDispatch } from "react-redux";
import { setIsItHeartAttack } from '../redux/QuestionSlice';
import { GetTestResultModal } from '../components/PopUps/getTestResultModal';

import swal from 'sweetalert';


export const Questions = () => {


    //  Initialitions 

    let dispatch = useDispatch();
    let history = useHistory();
    let location = useLocation();
    let getTestResult = "";

    let totalScreens = location.state.totalScreens
    let [screenCount, setScreenCount] = useState(1)
    const [selected, setSelected] = useState(false);
    const [getTestResp, setGetTestResp] = useState("");
    const [showTestRespModal, setShowTestRespModal] = useState(false);

    const dataFromReducer = useSelector((state) => state.QuestionSlice);
    console.log('Sample data from reducer', dataFromReducer)


    let ReqObj = (dataFromReducer.isItHeartAttack && !_.isEmpty(dataFromReducer.isItHeartAttack)) ? dataFromReducer.isItHeartAttack : {
        "age": "0",
        "sex": "",
        "rf": "",
        "site": "",
        "radiation": "",
        "character": "",
        "associated": "",
        "duration": "",
        "aggravating": ""
    }


    // /Functions 

    const onBackArrow = () => {
        // history.push("/HomePage");
        history.goBack();
    };
    const handleBasicDetails = (type, e) => {

        if (type == "age" && e.target.value !== "") {
            let tempObj = { ...ReqObj };
            tempObj.age = e.target.value;
            ReqObj = tempObj;
        }

        // dispatch req obj to reducer

        dispatch(setIsItHeartAttack(ReqObj))
    };

    // On click next and previous 

    let onNext = async () => {

        if (screenCount < totalScreens) {
            setScreenCount(screenCount + 1);
        }
        else {
            // let url = `http://103.61.231.160:8080/getTestResult`; //Static URL

            let res = await axios.post('http://103.61.231.160:8080/getTestResult', ReqObj, {
                auth: {
                    username: 'theheart',
                    password: '1234'
                }
            })
                .then(function (response) {
                    console.log(response);
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                });
            // console.log(res);
            if (res.status && res.status == 200) {

                getTestResp && swal({ text: `Test Result is ${getTestResp}` })

                setGetTestResp(res.data);
                setShowTestRespModal(true);
            }

        }
    };

    let onPrev = () => {

        screenCount <= 1 ? alert("Disabled") : setScreenCount(screenCount - 1)

    }

    let onCapsuleClick = (e) => {

        let tempObj = { ...ReqObj };

        let keytobeupdated = contentMap[screenCount].key;

        tempObj[keytobeupdated] = e.target.value;

        //Reqobj to be dispatched with the updated values and stored in redux

        ReqObj = tempObj;
        dispatch(setIsItHeartAttack(ReqObj));

    }



    const contentMap = {
        1: { key: "sex", value: "Basic Details" },
        2: { key: "rf", value: "Please tell us, which of this is true" },
        3: { key: "site", value: "Can you try and locate the pain/discomfort ? " },
        4: { key: "radiation", value: "Where does the pain/discomfort spread ? " },
        5: { key: "character", value: "Which of these best describes pain/discomfort  that you feel? " },
        6: { key: "associated", value: "Is there something else that you are experiencing ? " },
        7: { key: "duration", value: "How long did your pain last ? " },
        8: { key: "aggravating", value: "How did your problem start/ Do any of these worsen your pain? " },
    };

    let content = contentMap[screenCount].value || ""; // Fallback to empty string if no match


    //  Questions array 
    let titleOnHomePage =
        [
            [{ title: constants.MALE }, { title: constants.FEMALE }],
            [{ title: constants.HIGH_BLOOD_PRESSURE }, { title: constants.DIABETIC }, { title: constants.SMOKE }, { title: constants.FAMILY_HISTORY }, { title: constants.HEART_ATTACK }, { title: constants.NONE_OF_THE_ABOVE }],
            [{ title: constants.LEFT_SIDE_OF_CHEST_AND_LEFT_ARM }, { title: constants.WHOLE_CHEST }, { title: constants.CENTRE_OF_CHEST }, { title: constants.LEFT_SIDE_OF_CHEST }, { title: constants.UPPER_PART_OF_ABDOMEN }, { title: constants.BOTH_SHOULDERS_AND_OR_ARMS }, { title: constants.NECK_THROAT }, { title: constants.RIGHT_SIDE_OF_CHEST }, { title: constants.BACK_OF_HEAD_AND_NECK }, { title: constants.BREATHLESSNESS_ON_EXERTION }, { title: constants.WEAKNESS_ON_WALKING_RELIEF_WITH_REST }, { title: constants.SUDDEN_BREATHLESSNESS }, { title: constants.NO_PAIN_BUT_SUDDEN_PROFUSE_SWEATING }, { title: constants.NONE_OF_THE_ABOVE },],
            [{ title: constants.LEFT_SHOULDER_AND_LEFT_ARM }, { title: constants.BOTH_SHOULDERS }, { title: constants.RIGHT_SHOULDER }, { title: constants.BOTH_ARMS }, { title: constants.GOING_BACK_BETWEEN_SHOULDERS }, { title: constants.SPREADING_TO_NECK_OR_JAW }, { title: constants.SPREADING_TO_CHEST }, { title: constants.SPREADING_TO_BACK_OF_HEAD_AND_NECK }, { title: constants.NONE_OF_THE_ABOVE }],
            [{ title: constants.CRUSHING_SEVERE }, { title: constants.SQUEEZING_COMPRESSION_OR_CLAMPING }, { title: constants.CONSTRICTING_TIGHTNESS }, { title: constants.PRESSURE_LIKE_HEAVY_WEIGHT }, { title: constants.DISCOMFORT_SIMILAR_TO_PREVIOUS_HEART_PROBLEM }, { title: constants.NEVER_HAD_THIS_TYPE_OF_PAIN_IN_PAST }, { title: constants.HEAVINESS }, { title: constants.CHOKING_DRYNESS_ABNORMAL_SENSATION_IN_THROAT }, { title: constants.BURNING }, { title: constants.BELCHING }, { title: constants.SHARP_PAIN_LOCALIZED_BY_FINGER_TIP }, { title: constants.PAIN_IN_THE_SUPERFICIAL_PART_OR_IN_THE_MUSCLE }, { title: constants.NONE_OF_THE_ABOVE },],
            [{ title: constants.SWEATING_OR_COLD_SWEATING }, { title: constants.VOMITING_NAUSEA }, { title: constants.GIDDINESS }, { title: constants.BREATHLESSNESS }, { title: constants.WEAKNESS }, { title: constants.NONE_OF_THE_ABOVE },],
            [{ title: constants.FEW_SECONDS }, { title: constants.TWO_TO_TEN_MINUTES }, { title: constants.TEN_TO_TWENTY_MINUTES }, { title: constants.THIRTY_MINUTES_OR_MORE }, { title: constants.CONTINUOUS_PAIN_FOR_TWO_DAYS_OR_MORE }, { title: constants.NONE_OF_THE_ABOVE },],
            [{ title: constants.DISCOMFORT_DURING_PHYSICAL_ACTIVITY_OR_HURRY }, { title: constants.STARTED_WITH_ACTIVITY_RELIEVED_BY_REST_SLOWING_PACE }, { title: constants.STARTED_WHEN_I_WAS_AT_REST }, { title: constants.IT_HAS_NO_RELATION_WITH_PHYSICAL_ACTIVITY }, { title: constants.DISCOMFORT_INCREASES_BY_MOVEMENT_OF_ARM }, { title: constants.DISCOMFORT_INCREASES_BY_DEEP_BREATHING_AND_COUGHING }, { title: constants.NECK_THROAT }, { title: constants.DISCOMFORT_INCREASES_BY_CHANGE_IN_BODY_POSTURE }, { title: constants.DISCOMFORT_INCREASES_BY_APPLYING_PRESSURE_ON_THE_SITE_OF_PAIN }, { title: constants.PAIN_REDUCES_BY_APPLYING_PRESSURE_ON_THE_SITE_OF_PAIN }, { title: constants.NONE_OF_THE_ABOVE },],
        ];



    return (
        <ion-content>


            <div>

                <Header
                    backArrow={true}
                    hamBurgerMenu={false}
                    HeaderTitle={location.state.title}
                    onBackArrow={onBackArrow}
                />

                <div className="container pb-2 mt-80 ">
                    <ScreenCount totalScreens={totalScreens} currentScreen={screenCount} content={content} />

                </div>



                {/* This part of the screen will be Dynamic  */}

                <div className='mx-3 pb-70'>


                    {
                        screenCount === 1 && (<div>




                            <form>
                                <div>
                                    <p className='titleText'>Sex </p>



                                    <div>

                                        {titleOnHomePage[0].map((item, index) => {



                                            return (
                                                // {`titleCapsule ${selected ? "selected" : ""} App`}
                                                <div className={`mt-1 capsuleDiv`} key={item.title + index}>

                                                    <TitleCapsule title={item.title} onCapsuleClick={onCapsuleClick} />

                                                </div>
                                            )

                                        })}

                                    </div>

                                </div>

                                <div className='mt-4'>
                                    <label className='titleText'>
                                        Age
                                    </label>
                                    <div className='mt-3 mx-3'>
                                        <input type="number" id="age" onChange={(e) => handleBasicDetails("age", e)}>
                                        </input>

                                    </div>
                                </div>


                            </form>


                        </div>)
                    }
                    {
                        screenCount === 2 &&
                        (<div>

                            {titleOnHomePage[1].map((item, index) => {



                                return (
                                    // {`titleCapsule ${selected ? "selected" : ""} App`}
                                    <div className={`mt-1 capsuleDiv`} key={item.title + index}>

                                        <TitleCapsule title={item.title} onCapsuleClick={onCapsuleClick} />

                                    </div>
                                )

                            })}

                        </div>)
                    }
                    {
                        screenCount === 3 &&
                        (<div>

                            {titleOnHomePage[2].map((item, index) => {



                                return (
                                    // {`titleCapsule ${selected ? "selected" : ""} App`}
                                    <div className={`mt-1 capsuleDiv`} key={item.title + index}>

                                        <TitleCapsule title={item.title} onCapsuleClick={onCapsuleClick} />

                                    </div>
                                )

                            })}

                        </div>)
                    }
                    {
                        screenCount === 4 &&
                        (<div>

                            {titleOnHomePage[3].map((item, index) => {



                                return (
                                    // {`titleCapsule ${selected ? "selected" : ""} App`}
                                    <div className={`mt-1 capsuleDiv`} key={item.title + index}>

                                        <TitleCapsule title={item.title} onCapsuleClick={onCapsuleClick} />

                                    </div>
                                )

                            })}

                        </div>)
                    }
                    {
                        screenCount === 5 &&
                        (<div>

                            {titleOnHomePage[4].map((item, index) => {



                                return (
                                    // {`titleCapsule ${selected ? "selected" : ""} App`}
                                    <div className={`mt-1 capsuleDiv`} key={item.title + index}>

                                        <TitleCapsule title={item.title} onCapsuleClick={onCapsuleClick} />

                                    </div>
                                )

                            })}

                        </div>)
                    }
                    {
                        screenCount === 6 &&
                        (<div>

                            {titleOnHomePage[5].map((item, index) => {



                                return (
                                    // {`titleCapsule ${selected ? "selected" : ""} App`}
                                    <div className={`mt-1 capsuleDiv`} key={item.title + index}>

                                        <TitleCapsule title={item.title} onCapsuleClick={onCapsuleClick} />

                                    </div>
                                )

                            })}

                        </div>)
                    }
                    {
                        screenCount === 7 &&
                        (<div>

                            {titleOnHomePage[6].map((item, index) => {



                                return (
                                    // {`titleCapsule ${selected ? "selected" : ""} App`}
                                    <div className={`mt-1 capsuleDiv`} key={item.title + index}>

                                        <TitleCapsule title={item.title} onCapsuleClick={onCapsuleClick} />

                                    </div>
                                )

                            })}

                        </div>)
                    }
                    {
                        screenCount === 8 &&
                        (<div>

                            {titleOnHomePage[7].map((item, index) => {



                                return (
                                    // {`titleCapsule ${selected ? "selected" : ""} App`}
                                    <div className={`mt-1 capsuleDiv`} key={item.title + index}>

                                        <TitleCapsule title={item.title} onCapsuleClick={onCapsuleClick} />

                                    </div>
                                )

                            })}

                        </div>)
                    }


                </div>




                {/* ---------------------------------------- */}

                <div class="bottom-fixed-div">
                    <button className='buttonWhite' onClick={() => { onPrev() }} >Previous </button>
                    <button className='buttonMix' onClick={() => { onNext() }}>Next</button>
                </div>


            </div>
        </ion-content>
    )
}
