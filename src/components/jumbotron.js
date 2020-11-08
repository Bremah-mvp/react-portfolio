import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import image from "../images/about-me-photo.jpg";
import githubLogo from "../images/GitHub-Mark-120px-plus.png";
import linkedInLogo from "../images/linkedin.png";

const MainSection = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3"> Full Stack Web Developer</h1>
                            <p className="lead">My personal journey from africa  to becoming a programmer.</p>

                            <a className="logo" href="https://github.com/Bremah-mvp">
                                <img src={githubLogo} alt="GitHub logo" id="github" />
                            </a>
                            <a className="logo" href="https://www.linkedin.com/in/bremah-lwanga-99b09988/">
                                <img src={linkedInLogo} alt="LinkedIn logo" id="linkedin" />
                            </a>
                            <a className="logo" href="file:///C:/Users/mvpbremah/Downloads/Resume%20(1).pdf" id="cv">
                                CV
                    </a>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
            <div className="row">
                <div id="aboutMeSection">
                    <div className="col-lg-3 col-12">
                        <img src={image} alt="Sean Belverstone" id="myPhoto" />
                    </div>
                    <div className="col-12">
                        <div id="aboutMeText">
                            <p>As an african i have been through alot of adversities as being born there is surely one of them, i made my way to USA with my hard earned Bachelors degree in infromation technology I am now proficient in React, Javascript, Node.js, Express, HTML & CSS, i should say front and backend</p>
                            <p>Am well equiped for designing front-end and a logical brain for tackling back-end, I'd be an essential asset to your team and ready to battle.</p>
                            <p>Please check out my favorite projects via the navbar above, or even visit my GitHub to see my full catalogue. Can't wait to hear from you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;