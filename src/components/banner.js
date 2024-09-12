import React, { useEffect, useRef } from "react";
import { bannerCanvas } from "../scripts/canvas";
import "../styles/banner.css";

function Banner() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        bannerCanvas(canvas);
    }, []);

    return (
        <div className="banner">
            <canvas className="canvas" ref={canvasRef}></canvas>
            <div className="intro">
                <div className="intro-text">
                    <p>
                        Hello! My name is <span className="noku">Noku</span>
                    </p>
                    <p>I'm a full-stack engineer</p>
                    <p>This is my portfolio page</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
