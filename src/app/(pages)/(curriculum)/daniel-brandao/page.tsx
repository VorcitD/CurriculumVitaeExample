import {
    HeaderWrapper,
    FooterWrapper,
    LinksWrapper,
    Contact,
    LabelContainer,
    Image,
    LinkContainer,
    PageWrapper,
    Title,
    Paragraph,
    Subtitle,
    ProfileSection,
    PageContent,
    TimelineSection,
    ExperienceContainer,
    ExperienceData,
    ExperienceTitle,
    SkillSection,
    VerticalLine,
    Skill,
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faAtlassian } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function DanielBrandaoCurriculum() {
    return (

        <PageWrapper>
            <PageContent>
                <HeaderWrapper>

                    <h1>Daniel Brandão</h1>

                    <nav>
                        <LinksWrapper>

                            <LinkContainer>
                                <Link href="github.com">
                                    <FontAwesomeIcon icon={faGithub} style={{ height: '40px' }} />

                                </Link>
                            </LinkContainer>

                            <LinkContainer>
                                <Link href="linkedin.com">
                                    <FontAwesomeIcon icon={faLinkedin} style={{ height: '40px' }} />
                                </Link>
                            </LinkContainer>

                            <LinkContainer>
                                <Link href="twitter.com">
                                    <FontAwesomeIcon icon={faTwitter} style={{ height: '40px' }} />
                                </Link>
                            </LinkContainer>

                            <LinkContainer>
                                <Link href="atlassian.com">
                                    <FontAwesomeIcon icon={faAtlassian} style={{ height: '40px' }} />
                                </Link>
                            </LinkContainer>

                        </LinksWrapper>
                    </nav>
                </HeaderWrapper>

                <main>
                    <ProfileSection>
                        <LabelContainer>
                            <Title style={{ margin: '0px' }}>Prazer em te conhecer! <br />Eu sou</Title>
                            <Title style={{
                                textDecoration: "underline",
                                textDecorationColor: "green",
                                marginBottom: '60px',
                                padding: '0px'
                            }}>
                                Daniel Brandão.
                            </Title>
                            <Paragraph>Base in the UK, i'm a front-end developer passionate about building acessible web apps that users love</Paragraph>
                            <div style={{ marginTop: '40px' }}>
                                <Contact href="whatsapp.com">Fale Comigo</Contact>
                            </div>
                        </LabelContainer>

                        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }} >
                            <Image src="/Daniboy.png" alt="Daniboy" />
                        </div>

                    </ProfileSection>

                    <hr />

                    <SkillSection>
                        <Skill>
                            <Subtitle>HTML</Subtitle>
                            <Paragraph style={{ width: '100%', textAlign: 'center' }}>4 Anos de experiencia</Paragraph>
                        </Skill>
                        <Skill>
                            <Subtitle>CSS</Subtitle>
                            <Paragraph style={{ width: '100%', textAlign: 'center' }}>4 Anos de experiencia</Paragraph>
                        </Skill>
                        <Skill>
                            <Subtitle>Javascript</Subtitle>
                            <Paragraph style={{ width: '100%', textAlign: 'center' }}>4 Anos de experiencia</Paragraph>
                        </Skill>
                        <Skill>
                            <Subtitle>Acessibilidade</Subtitle>
                            <Paragraph style={{ width: '100%', textAlign: 'center' }}>4 Anos de experiencia</Paragraph>
                        </Skill>
                        <Skill>
                            <Subtitle>React</Subtitle>
                            <Paragraph style={{ width: '100%', textAlign: 'center' }}>3 Anos de experiencia</Paragraph>
                        </Skill>
                        <Skill>
                            <Subtitle>Sass</Subtitle>
                            <Paragraph style={{ width: '100%', textAlign: 'center' }}>3 Anos de experiencia</Paragraph>
                        </Skill>
                    </SkillSection>
                </main>

                <TimelineSection>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            paddingTop: '120px',
                            marginBottom: '80px'
                        }} >
                        <Title style={{
                            textDecoration: "underline",
                            textDecorationColor: "green",
                            paddingTop: '0px',
                            margin: '0px'
                        }}>
                            Experiências
                        </Title>
                        <Contact href="whatsapp.com">Fale Comigo</Contact>
                    </div>

                    <ExperienceContainer>
                        <ExperienceTitle>Bacharelado em Engenharia de Controle e Automação</ExperienceTitle>
                        <ExperienceData>(2018-2023)</ExperienceData>
                        <Paragraph style={{ textAlign: 'center', margin: '20px 0' }}>
                            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet
                        </Paragraph>
                    </ExperienceContainer>

                    <VerticalLine></VerticalLine>

                    <ExperienceContainer>
                        <ExperienceTitle>Bacharelado em Engenharia de Controle e Automação</ExperienceTitle>
                        <ExperienceData>(2018-2023)</ExperienceData>
                        <Paragraph style={{ textAlign: 'center', margin: '20px 0' }}>
                            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet
                        </Paragraph>
                    </ExperienceContainer>

                    <VerticalLine></VerticalLine>

                    <ExperienceContainer>
                        <ExperienceTitle>Bacharelado em Engenharia de Controle e Automação</ExperienceTitle>
                        <ExperienceData>(2018-2023)</ExperienceData>
                        <Paragraph style={{ textAlign: 'center', margin: '20px 0' }}>
                            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet
                        </Paragraph>
                    </ExperienceContainer>


                </TimelineSection>

                <hr style={{ marginTop: '80px' }} />

                <FooterWrapper>

                    <h1>Daniel Brandão</h1>

                    <nav>
                        <LinksWrapper>

                            <LinkContainer>
                                <Link href="github.com">
                                    <FontAwesomeIcon icon={faGithub} style={{ height: '40px' }} />

                                </Link>
                            </LinkContainer>

                            <LinkContainer>
                                <Link href="linkedin.com">
                                    <FontAwesomeIcon icon={faLinkedin} style={{ height: '40px' }} />
                                </Link>
                            </LinkContainer>

                            <LinkContainer>
                                <Link href="twitter.com">
                                    <FontAwesomeIcon icon={faTwitter} style={{ height: '40px' }} />
                                </Link>
                            </LinkContainer>

                            <LinkContainer>
                                <Link href="atlassian.com">
                                    <FontAwesomeIcon icon={faAtlassian} style={{ height: '40px' }} />
                                </Link>
                            </LinkContainer>

                        </LinksWrapper>
                    </nav>
                </FooterWrapper>
            </PageContent>
        </PageWrapper>

    )
}
