import React from 'react';
import Projects from "../../Projects";
import Project from '../Project/Project';
import { BodyContainer, Container } from "../StyledComponents/StyledComponents";

const HomeProjects = () => {
    return(
        <BodyContainer>
            <Container top={6}>
                <Container leftAlign bottom={4}>
                    <h2>Recent Projects</h2>
                </Container>
                {Projects.map((project) => {
                    return (
                        <Project
                        button={project.button}
                        client={project.client}
                            color={project.color}
                            newTab={project.newTab}
                            route={project.route}
                            skills={project.skills}
                            thumbnail={project.thumbnail}
                            title={project.title}
                        />
                    )})
                }
            </Container>
        </BodyContainer>
    )
}

export default HomeProjects;
