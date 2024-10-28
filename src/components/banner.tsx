import React, { useEffect, useRef } from "react";
import { bannerCanvas } from "../scripts/canvas";
import "../styles/banner.css";

const Banner: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            bannerCanvas(canvas);
        }
    }, []);

    return (
        <div className="banner">
            <canvas className="canvas" ref={canvasRef}></canvas>
            <div className="intro">
                <div className="intro-text">
                    <p>
                        Hello! My name is <span className="noku">Noku</span>
                    </p>
                    <p>I'm a frontend developer</p>
                    <p>This is my portfolio page</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
