import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation/Navigation.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import ProjectHero from '../../components/Project/ProjectHero.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import {
    BodyContainer,
    Container,
    Image
} from '../../components/StyledComponents/StyledComponents';
import Projects from "../../Projects";
import SampleImg from "../../assets/img/sample.png";

class ProjectExample extends React.Component {

    render() {
        const Project = {
            title: Projects[1].title,
            role: Projects[1].role,
            skills: Projects[1].skills,
            description: Projects[1].description,
            involvement: Projects[1].involvement,
            client: Projects[1].client,
            color: Projects[1].color,
        };

        return (
            <>
                <ProgressBar />
                <Navigation onCaseStudy color={Project.color} />
                <BodyContainer>
                    <ProjectHero 
                        title={Project.title}
                        skills={Project.skills}
                        description={Project.description}
                        involvement={Project.involvement}
                        role={Project.role}
                        thumbnail={SampleImg}
                        client={Project.client}
                        color={Project.color}
                    />
                    <Container small margin={10}>
                        <h2>Problem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Container>

                    <Container small margin={10}>
                        <h2>Goals</h2>
                        <List>
                            <ListHeading><li>Simplify Flows</li></ListHeading>
                            <ul>
                                <li>Here's how I did it.</li>
                                <li>Here's how I did it.</li>
                                <li>Here's how I did it.</li>
                            </ul>
                            <br/>
                            <ListHeading><li>Reuasable Components</li></ListHeading>
                            <ul>
                                <li>Here's how I did it.</li>
                                <li>Here's how I did it.</li>
                                <li>Here's how I did it.</li>
                            </ul>
                            <br/>
                            <ListHeading><li>Integrated Platform</li></ListHeading>
                            <ul>
                                <li>Here's how I did it.</li>
                                <li>Here's how I did it.</li>
                                <li>Here's how I did it.</li>
                            </ul>
                        </List>
                    </Container>

                    <Container small top={10} bottom={3}>
                        <h1>Solutions</h1>
                    </Container>    
                    <Image src={SampleImg} alt="" />
                    
                    <Container small margin={10}>
                        <h2>Impact</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Container>
                </BodyContainer>
                <Footer onCaseStudy color={Project.color} />
            </>
        );
    }
}

export default ProjectExample;

const ListHeading = styled.strong`
    color: white;
`;

const List = styled.ol`
    padding-left: 2rem;
`;