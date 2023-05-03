import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Artur Gouveia </span>
            from <span className="purple"> Angola.</span>
            <br />
            I’m a Fullstack software Developer! I can help you build a product , feature
            or website Look through some of my work and experience! If you like
            what you see and have a project you need coded, don’t hestiate to
            contact me.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking and making up co
            </li>
            <li className="about-activity">
              <ImPointRight /> Sudoku
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Artur Gouveia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
