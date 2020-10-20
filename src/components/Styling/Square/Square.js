import React from 'react';

import styles from './Square.module.css';

const square = props => {
    return (
        <div
            className={styles.Square}
            style={{
                transform: props.transform,
                top: props.top,
                bottom: props.bottom,
                left: props.left,
                right: props.right
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="78" height="77" viewBox="0 0 78 77">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" y1="1.008" x2="0.5" y2="0.064" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#25dcf1"/>
                        <stop offset="0.086" stopColor="#1ebfe9"/>
                        <stop offset="0.233" stopColor="#1595df"/>
                        <stop offset="0.382" stopColor="#0d71d6"/>
                        <stop offset="0.533" stopColor="#0756cf"/>
                        <stop offset="0.685" stopColor="#0343ca"/>
                        <stop offset="0.839" stopColor="#0037c7"/>
                        <stop offset="1" stopColor="#0034c7"/>
                    </linearGradient>
                    <clipPath id="clip-el-1">
                        <rect width="78" height="77"/>
                    </clipPath>
                </defs>
                <g id="el-1" clipPath="url(#clip-el-1)">
                    <rect id="Retângulo_12" data-name="Retângulo 12" width={props.width ? props.width : "55.404"} height={props.height ? props.height : "55.404"} transform="translate(30.227 -0.343) rotate(30)" opacity="0.54" fill={props.fill ? props.fill : "url(#linear-gradient)"}/>
                </g>
            </svg>
        </div>
        
    );
};

export default square;