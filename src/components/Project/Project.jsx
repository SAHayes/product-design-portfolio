import React from 'react';
import {
    Container,
    CaseLink,
    CaseStudyContainer,
    CaseStudyContent,
    CaseStudyImage
} from '../StyledComponents/StyledComponents';
import { ClientText } from "./Style";
import Button from '../Utility/Button';
import { Fade } from 'react-awesome-reveal';

const Project = (props) => {
    return (
        <Fade direction="top" delay={200} duration={1500} triggerOnce cascade>
            <CaseLink href={props.route} target={props.newTab ? '_blank' : null}>
                <CaseStudyContainer background={props.color}>
                    <CaseStudyContent>
                        <Container flexRow leftAlign>
                            { props.client ? <ClientText>{props.client}</ClientText> : null }
                            { props.restricted ? <i style={{ color: "white", marginLeft: "1rem" }} className="las la-lock"></i> : null }
                        </Container>
                        
                        <h2>{props.title}</h2>

                        <Button
                            right
                            text={props.button}
                            newTab={props.newTab}
                            route={props.route}
                        />
                    </CaseStudyContent>
                    <CaseStudyImage background={props.color}>
                        <img src={props.thumbnail} alt=""/>
                    </CaseStudyImage>
                </CaseStudyContainer>
            </CaseLink>
        </Fade>
    );
}

export default Project;