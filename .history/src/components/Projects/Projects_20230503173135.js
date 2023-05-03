import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid from "../../Assets/Projects/covid.png";
import math_magician from "../../Assets/Projects/math_magician.png";
import leaderboard from "../../Assets/Projects/leaderboard.png";
import rated_movies from "../../Assets/Projects/rated_movies.png";
import space_project from "../../Assets/Projects/space_project.png";
import todos from "../../Assets/Projects/personal_budget.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Global Numbers"
              description="A SPA with worldwide coronavirus information retrieved from an API."
              ghLink="https://github.com/Arturgouveia1970/COVID-19-Global-numbers"
              demoLink="https://global-covid-19-numbers.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space_project}
              isBlog={false}
              title="Space-project"
              description="A SPA for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions."
              ghLink="https://github.com/Arturgouveia1970/Space-project"
              demoLink="https://artur-felix-space-capstone.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rated_movies}
              isBlog={false}
              title="Top Rated Movies"
              description="In this project we have used HTML, CSS, JS, Bootstrap, webpack, and, jest that displays movies and allows users to leave likes, comments, and reservations on their favorite titles."
              ghLink="https://github.com/felixodette/Javascript-Group-Capstone"
              demoLink="https://63472938939be20b59bda72c--stellular-cassata-c5fee6.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaderboard}
              isBlog={false}
              title="Leaderboard"
              description="A board that lets you get and send information to and from an API.."
              ghLink="https://github.com/Arturgouveia1970/leaderboard"
              demoLink="https://artur-leaderboard.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={math_magician}
              isBlog={false}
              title="Math Magician"
              description="A single page application with a calculator and a nice quote!"
              ghLink="https://github.com/Arturgouveia1970/math-magician-3"
              demoLink="https://arturgouveia-math-magician-app.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal_budget}
              isBlog={false}
              title="Personal Budget App"
              description="A mobile app that helps users controll expenses."
              ghLink="https://github.com/Arturgouveia1970/personal-budget-app"
              demoLink="https://artur-badget.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
