import React from "react";
import ProjectInvolvement from "./ProjectInvolvement";
import {
    Container,
    Image,
} from "../StyledComponents/StyledComponents";
import { HeroTitle } from "./Style";

class Hero extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: this.props.skills,
            role: this.props.role
        };
    }

    render() {
        return (
            <div>
                <Container bottom={6}>
                    <Container small  margin={10}>
                        <HeroTitle>{this.props.title}</HeroTitle>
                    </Container>

                    <ProjectInvolvement
                        involvement={this.props.involvement}
                        tasks={this.props.tasks}
                        role={this.props.role}
                        skills={this.props.skills}
                        color={this.props.color}
                    />

                    <Image src={this.props.thumbnail} alt="Overview" />
                </Container>

                <Container small margin={6}>
                    <h1>Overview</h1>
                    <p>{this.props.description}</p>
                </Container>
            </div>
        );
    }
}

export default Hero;
