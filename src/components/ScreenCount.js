import React from 'react'

const ScreenCount = (props) => {
    return (
        <div>

            <div className='counter'>

                <div className='miniContainer'>
                    {props.currentScreen}/{props.totalScreens}
                </div>

                <div>
                    {props.content}
                </div>

            </div>


        </div>
    )
}

export default ScreenCount