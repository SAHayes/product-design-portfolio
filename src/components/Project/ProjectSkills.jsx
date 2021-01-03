import React from "react";
import styled from "styled-components";
import { Container, Label } from "../StyledComponents/StyledComponents";
import { Badge } from "./Style";


const ProjectSkills = (props) => {
    
    const role = props.role.split(" • ")

    return(
        <Container margin={4}>
            
            <Container flex>
                <GridItem>
                    <Label>Role</Label>
                    <p>{role[0]}</p>
                </GridItem>
                <GridItem>
                    <Label>Date</Label>
                    <p>{role[1]}</p>
                </GridItem>
                <GridItem>
                    <Label>Skills</Label>
                    {props.skills.map((skill) => {
                        return (
                            <Badge color={props.color}>
                                <p>{skill}</p>
                            </Badge>
                        )
                    })}  
                </GridItem>
            </Container>
        </Container>
    )
}

export default ProjectSkills;

const GridItem = styled.div`
    width: 100%;

    @media (max-width: ${props => props.theme.queries.mobile}) {
        margin-bottom: 2rem;
    }
`;
