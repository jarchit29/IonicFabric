import React, { useState } from 'react'

const TitleCapsule = (props) => {

  // const [selected, setSelected] = useState(false)
  let setSelectedState = (e) => {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', function () {
        // Remove the 'selected' class from all radio-container divs
        document.querySelectorAll('.titleCapsule').forEach(container => {
          container.classList.remove('selected');
        });

        // Add the 'selected' class to the parent div of the selected radio button
        const parentContainer = this.closest('.titleCapsule');
        if (parentContainer) {
          parentContainer.classList.add('selected');
        }
      });
    });

    props.onCapsuleClick(e);

  }
  return (

    <div className={`titleCapsule App `}  >

      {/* <div className='titleText titleCenter'  onClick={() => props.onCapsuleClick()} >
        {props.title}
      </div> */}

      <input type="radio" id={props.title} name="fav_language" value={props.title} onClick={(e) => setSelectedState(e)} />
      {/* <label className='titleText titleCenter ml-25' for={props.title}>{props.title}</label> */}
      <label className='titleText ml-25' for={props.title}>{props.title}</label>

    </div>
  )
}

export default TitleCapsule