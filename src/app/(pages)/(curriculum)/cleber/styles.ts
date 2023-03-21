'use client'

import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #050505;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageContent = styled.div`
  width: 70%;
`;


export const HeaderWrapper = styled.header`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  width: 70%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 999;
`;

export const FooterWrapper = styled.footer`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const LinksWrapper = styled.ul`
  display: flex;
  align-items:center;
  list-style:none;
`;

export const LinkContainer = styled.li`
  margin: 0 15px;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 75px;
  font-weight: 800;
  color: white;
  padding-top: 230px;
  margin-right: 50px;
`;

export const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 60px;
  font-weight: 600;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  width: 500px;
  font-weight: 400;
  color: grey;
  font-family: 'Roboto', sans-serif;

`;

export const ProfileSection = styled.section`
  display: flex;
  width: 100%;
  height: 900px;
  position: relative;
  margin-bottom: 160px;
`;

export const LabelContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80%;
  height: 100%;
  padding: 10px;
`;

export const Image = styled.img`
  width: 30vw;
  object-fit: cover;
  height: 100%;
`;

export const SkillSection = styled.section`
  display: grid;
  padding: 100px 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit,400px);
  justify-content:space-between;
  align-content:center;
`;

export const Skill = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction:column;
  align-items:center;

`;

export const Contact = styled.a`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size:24px;
  text-decoration:underline;
  text-decoration-color:green;
`;

export const VerticalLine = styled.div`
  border-left: 6px solid white;
  height: 100px;
  margin-left: 50%;
  margin-bottom:10px;
`;

export const TimelineSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ExperienceData = styled.h2`
  color: green;
  opacity: 0.8;
  font-size: 24px;
  text-align:center;
  font-family: 'roboto' sans-serif;
  margin:10px 0;
`;

export const ExperienceTitle = styled.h1`
  width: 85%;
  text-align:center;
  color: white;
  font-size: 50px;
  font-family: 'roboto' sans-serif;
`;