import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ecommerce.png";
import emotion from "../../Assets/Projects/tourism.jpg";
import editor from "../../Assets/Projects/wiki.png";
import chatify from "../../Assets/Projects/foodmunch.jpeg";
import suicide from "../../Assets/Projects/ipl.jpeg";
import bitsOfCode from "../../Assets/Projects/chatbot.jpeg";

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
              imgPath={emotion}
              isBlog={false}
              title="Explore tourism in telangana"
              description="Developed tourism website where users can browse through the content, videos and images of populardestinations.
               Implemented mobile friendly layout using different HTML block, inline elements, and Styled usingCSS3 properties such as background, flex, and CSS box model properties.
               Implemented multiple images of a particular destination in a carousel using bootstrap carousel andvirtual tour videos using bootstrap embed component.Technologies used: HTML, CSS, Bootstrap."
              ghLink=""
              demoLink="http://vamshitourism27.ccbp.tech/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food munch"
              description="Developed food munch website where users can browse through different category of food section and order their food in website
              Where this website devloped using the both moblie friendly layout using the HTML and CSS3."
              ghLink=""
              demoLink="https://orderfoodinsecs.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Chat with buddy"
              description="Chat with buddy is webpage, Where user can chat with bot like message and get quick reply to your message
              This was Developed by using the HtML and CSS and javascript like DOM manipulations to inbuilt the random method to give the dynamic message based on the message."
              ghLink=""
              demoLink="https://chatwithbuddy.ccbp.tech/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Wiki Browser"
              description="Wikipedia is a free, web-based encyclopedia that allows anyone to edit its content. It is one of the largest and most popular reference websites, providing information on a vast range of topics in multiple languages.
              Developed using HTML and CSS and Javascript fetch the data using public api to  get information based on search query parameter."
              ghLink=""
              demoLink="https://vamshiwebx.ccbp.tech/"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ecommerce website"
              description="An eCommerce website built with React.js is a dynamic, user-friendly platform designed for online shopping. React.js, a popular JavaScript library, is used to create a highly responsive and interactive user interface that enhances the shopping experience. Here’s an overview of what such a website."
              ghLink=""
              demoLink="http://vamshinxttrendz.ccbp.tech/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="IPL Dashboard"
              description="Building an IPL (Indian Premier League) dashboard using ReactJS involves creating a web application that displays various statistics and information related to the IPL. Here's a detailed description of how you might go about building such a dashboard:
              Devloped using the reactjs and fetch match and players details using the api call and show the response to user page."
              ghLink=""
              demoLink="https://vamshiipl.ccbp.tech"
        
    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
