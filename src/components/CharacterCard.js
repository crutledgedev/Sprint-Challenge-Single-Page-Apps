import React from 'react';
import Styled from 'styled-components';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


const ContentContainer = Styled.div`
max-width: 40%;
margin: 0 auto;
font-size: 1.5rem;

`;

const InfoContainer=Styled.div`
font-size: 1.2rem;
color: white;
background-color: dodgerblue;
padding: 3%;

`;






const CharacterCard = (props) => {
  return (
    <ContentContainer>                
         <Card>
        <CardBody>
        <InfoContainer>
          <CardTitle>Name: {props.name} </CardTitle>
          <CardSubtitle>Gender: {props.gender} </CardSubtitle>
          <CardSubtitle>Species: {props.species} </CardSubtitle>
          <CardSubtitle>Status: {props.status} </CardSubtitle>          
           </InfoContainer>
        </CardBody>
        <CardBody>
        </CardBody>
        </Card>
    </ContentContainer>
  );
};

export default CharacterCard;