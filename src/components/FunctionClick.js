import React from 'react';

const FunctionClick = () => {
   /* function clickHandler() {
        console.log('Button Clicked');
    }*/

    let clickHandler = () => {console.log("Function component clicked")}
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
};

export default FunctionClick;