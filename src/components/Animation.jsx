import React from "react";
import Lottie from 'lottie-react';
import AnimationJson from '../assets/Animation - 1700212637982.json'; 

export const Animation = () => {
    const animationStyle = {
        width: '300px', // Cambia el ancho deseado
        height: '300px', // Cambia la altura deseada

    };

    return (
        <div>
            <Lottie animationData={AnimationJson} style={animationStyle} />
        </div>
    );
}

export default Animation;