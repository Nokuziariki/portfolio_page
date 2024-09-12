import React from "react";
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";
import picture3 from "../assets/picture3.png";
import picture4 from "../assets/picture4.png";

function Projects() {
    return (
        <>
            <div id="projects">
                <div class="proba1">
                    <div class="proba-kartya">
                        <div>
                            <h3>Project 1</h3>
                        </div>
                        <div>
                            <img
                                class="prj-pic"
                                src={picture4}
                                alt="Project 1"
                            />
                        </div>
                    </div>
                </div>
                <div class="proba2">
                    <div class="proba-kartya">
                        <div>
                            <h3>Project 1</h3>
                        </div>
                        <div>
                            <img
                                class="prj-pic"
                                src={picture3}
                                alt="Project 1"
                            />
                        </div>
                    </div>
                </div>
                <div class="proba3">
                    <div class="proba-kartya">
                        <div>
                            <h3>Project 1</h3>
                        </div>
                        <div>
                            <img
                                class="prj-pic"
                                src={picture2}
                                alt="Project 1"
                            />
                        </div>
                    </div>
                </div>
                <div class="proba4">
                    <div class="proba-kartya">
                        <div>
                            <h3>Project 1</h3>
                        </div>
                        <div>
                            <img
                                class="prj-pic"
                                src={picture1}
                                alt="Project 1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
