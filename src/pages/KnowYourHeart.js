import React from 'react'
import { Header } from '../components/Miscellaneous/Header'
import { useHistory } from "react-router-dom";
import TitleCapsule from '../components/CardLayouts/TitleCapsule';

// Images
import { emergency_Icon, presentationInWomen_Icon, prevention_Icon, test_Icon, treatment_Icon, whatIsHeartAttack_Icon } from '../utils/constants';
import { WarningSigns_Icon } from '../utils/constants';


const KnowYourHeart = () => {


    let history = useHistory();

    const onBackArrow = () => {
        // history.push("/HomePage");
        history.goBack();
    };

    let knowYourHeart = [
        { title: 'What is a Heart Attack? ', routeTo: '', icon: whatIsHeartAttack_Icon, description: "<p>Heart attack is the death of a part of heart muscles, leading to permanent loss of heart capability to perform its work, pumping blood.</p> <h5> Why is heart attack caused? </h5> <p> To understand this, you first need to know how heart works. The job of heart is to pump blood a system of tubes called arteries.</p> <p>Over time, fat gets deposited in the coronary artries leading to blockage in flow of blood. Due to blockage, heart muscles get less and the muscles which may cause pain during heavy work of excercise. This is known as angina.</p> When the blockage becomes so much that complete blood flow is stopped, the muscles of heart begin to die. This condition is reffered to as heart attack" },
        { title: 'Warning Signs', icon: WarningSigns_Icon, description: "<p>The most common symptom is chest pain. Patients describe it as sensation of tightness, heaviness, burning or squeeng of chest. It is oftern mistaken as undigestion, leading to patients ignoring it! But pain may occur in areas other than chest also. Read through the following symptoms carefully, so you are better prepared. </p> <li> Pain or discomfort in other areas of  upper body including the arms, left shoulder, back, neck , jaw or stomach </li> <li> Difficulty in breathing or shortness of breath </li> <li> Sweating or 'cold sweat'. </li> <li>Fullness, indigestion or choking feeling(may feel like 'heartburn)</li> <li>Nausea or vomiting</li> <li>Light- headness, diiness, etreme weakness or anxiety </li> <li>Rapid or irregular heart beats</li> <p> Different people can experience different kinds of pain. It is usually of following types : </p> <p> Crushing, constricting, heaviness, squeeng, suffocating, burning like indigestion. There are also times when patients do not develop any such symptom during or after heart attack. This is called as silent heart attack. </p> <p>Think you might be at risk? Use our detection tool. </p>" },
        { title: 'Presentation in Women', icon: presentationInWomen_Icon, description: "<p>Symptoms of coronary artery disease in women : </p> <p> Studies show that women symptoms are less likely identified as heart disease realted. The symptoms of coronart artery disease and heart attack can be different for women than they are in men. Women are also less likely to  the symptoms of a heart attack and seek treatment. By learning and recognizing the symptoms, women can become assertive in their treatment. The most common symptoms of heart disease in women are :  </p> <li> Pain or pressure over the chest that travels to the arm or jaw </li> <li> A burning sensation in the chest or upper abdomen</li> <li>Shortness of breath, irregular heartbeat, dizziness, sweating, fatigue and nausea.</li>" },
        { title: 'What is the Emergency? ', icon: emergency_Icon, description: "<h5>Why is time so crucial ? </h5> <p>During heart attack , there is sudden 100% blockage in any of the artery supplying the heart muscles and this result in necrosis(death) of muscle fibers. This process takes some time and if we want to avoid or minimise the damage to the muscles then we have to open this blocked artery within that time. Failure to do so results in permanent damage to the muscles. Large amount of muscle damage decreases the pumping capacity of heart which eventually leads to heart failure. </p> <p>To get early treatment and save their heart, parients must first  their symptoms. So awareness of these symptoms is the key to early treatment of this disease. </p>" },
        { title: 'Tests/ Procedures', icon: test_Icon, description: "<H5> Test for diagnosis: </H5> <li><b> Electrovardiogram (ECG)-</b> It is a recording of activity of heart muscles on a paper taken via leads applied to the chest of the patient. It helps in diagosing heart attack, tells which area of heart is being affected and the type of heart attack (STEMI OR NSTEM). It also gives information regarding rythm of heart beat. </li> <li> <b> Troponin (Cardiac biomaker)-</b> This test is done on blood sample taken from the patient. It is very sensitive and provides the earliest confirmation of heart attack. </li> <li> <b> Echocardiogram -</b> This test is done via an ultrasound probe. It helps the doctor assess the damage caused and remaining functioning of the heart. </li><li><b>Stress test (TMT stress thallium, stress echo)- </b> If based on patient history and ECG findings diagnois of coronary artery disease is inderminate, stress tests such as Treadmill test (TMT), streaa thallium or stress echocardiography should be done. </li> <li> <b> Coronary angiography- </b> This test allows direct visualition of the arteries supplying the heart, thus helping in identification of site and size of any block, if present, in these arteries. To view blood flow a special dye is used. A long, thin, flexible tube (Catherter) is entered into an artery in the wrist or in the thigh, and goes up to the arteries in the heart, where it release the sye. Thi is known as an angiogram. </li> <p> When done in case of emergency as in a patient of heart attack, after the blocked region is identified, it is opened by a ballon and a stent (a small mesh) is placed there to keep the artery patent. This is known as Primary angioplasty.</p> <p> If patient has symptoms of coronary artery disease but is not suspected to have heart attack, an angiography may be scheduled electively. In elective cases, if coronary angiogram is done through wrist (Trans-radial) patient can be discharged from the hospital within two hours and if everything is normal then he may resume his office immediately. If it is done via thigh, patient is required to stay at hospital for atleast 6-8 hours. </p> <p> After the coronart angiography it can be decided what further treatment the patient needs. Medical management or coronary angioplasty or Bypass surgery. </p> " },
        { title: 'Treatment of Acute Heart', icon: treatment_Icon },
        { title: 'Prevention Strategies', icon: prevention_Icon }]



    return (

        <div>

            <Header
                backArrow={true}
                hamBurgerMenu={false}
                HeaderTitle="Know Your Heart "
                onBackArrow={onBackArrow}
            />

            <div className="container pb-5 mt-80 ">

                {knowYourHeart.map((item, index) => {


                    return (
                        <div className="mt-3" key={item.title + index}>

                            <TitleCapsule icon={item.icon} title={item.title} onCapsuleClick={() => { history.push('/KnowledgePage', { title: item.title, description: item.description }) }} />

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