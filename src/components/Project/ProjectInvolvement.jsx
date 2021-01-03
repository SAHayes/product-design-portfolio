import React from "react";
import { Container, Label } from "../StyledComponents/StyledComponents";
import ProjectSkills from "../../components/Project/ProjectSkills";

const Involvement = (props) => (
    <Container margin={6}>
        <ProjectSkills color={props.color} role={props.role} skills={props.skills}/>

        <>
            <Label>Description</Label>
            <p>{props.involvement}</p>
        </>
    </Container>
);

export default Involvement;
