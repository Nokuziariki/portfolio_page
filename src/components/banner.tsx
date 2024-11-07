import React, { useEffect, useRef, useState } from "react";
import { bannerCanvas } from "../scripts/canvas";
import textImage from "assets/textImage";
import myRealImage from "../assets/myRealImage.png";
import "../styles/banner.css";

const Banner: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            bannerCanvas(canvas);
        }
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isHovered) {
            interval = setInterval(() => {
                setOpacity((prev) => (prev < 1 ? prev + 0.1 : 1));
            }, 20);
        } else {
            interval = setInterval(() => {
                setOpacity((prev) => (prev > 0 ? prev - 0.1 : 0));
            }, 20);
        }
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div className="banner" id="banner">
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
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="pictureOfME"
            >
                {isHovered ? (
                    <pre>
                        <img
                            className="pictureOfMe"
                            src={myRealImage}
                            alt="My_Real_Face"
                            style={{
                                opacity: opacity,
                                transition: "opacity 0.05s ease-in-out",
                            }}
                        />
                    </pre>
                ) : (
                    <pre
                        className="pictureOfMe"
                        style={{ opacity: 1 - opacity }}
                    >
                        {textImage}
                    </pre>
                )}
            </div>
        </div>
    );
};

export default Banner;
