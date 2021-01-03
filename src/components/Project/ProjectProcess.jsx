import React from "react";
import { Container } from "../StyledComponents/StyledComponents";
import {
    ProcessContainer,
    ProcessSection,
    ProcessSeparator,
    ProcessList
} from "./Style";

const Process = (props) => {
    return(
        <Container width={100} bottom={6}>
            <ProcessContainer>
                <ProcessSection>
                    <ProcessSeparator />
                    <Container leftAlign>
                        <Container bottom={1}>
                            <h4>Discover</h4>
                        </Container>
                        <ProcessList>
                            {
                                props.discover.map((task) => {
                                    return(
                                        <p>{task}</p>
                                    )
                                })
                            }
                        </ProcessList>
                    </Container>
                </ProcessSection>

                <ProcessSection>
                    <ProcessSeparator />
                    <Container leftAlign>
                        <Container bottom={1}>
                            <h4>Analyze</h4>
                        </Container>
                        <ProcessList>
                            {
                                props.analyze.map((task) => {
                                    return(
                                        <p>{task}</p>
                                    )
                                })
                            }
                        </ProcessList>
                    </Container>
                </ProcessSection>
                <ProcessSection>
                    <ProcessSeparator />
                    <Container leftAlign>
                        <Container bottom={1}>
                            <h4>Create</h4>
                        </Container>
                        <ProcessList>
                            {
                                props.develop.map((task) => {
                                    return(
                                        <p>{task}</p>
                                    )
                                })
                            }
                        </ProcessList>
                    </Container>
                </ProcessSection>

                <ProcessSection>
                    <ProcessSeparator />
                    <Container leftAlign>
                        <Container bottom={1}>
                            <h4>Results</h4>
                        </Container>
                        <ProcessList>
                            {
                                props.results.map((task) => {
                                    return(
                                        <p>{task}</p>
                                    )
                                })
                            }
                        </ProcessList>
                    </Container>
                </ProcessSection>
            </ProcessContainer>
        </Container>
    )
};

export default Process;