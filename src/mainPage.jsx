import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../src/components/style.css";


import About from "./components/about";
import PersonalInfo from "./components/personalInfo";
import Experience from "./components/experience";
import Educaition from "./components/educaition";
import Techs from "./components/techs";
import Inderdoction from "./components/interdoction";
import FinnalDisplay from "./components/finalDisplay";

export default class Main extends Component {
  state = {
    resume: {
      personalInfo: {
        wills: "asdb,kjashdaklsjhda,k.sdhalksdhjlasdhalsdhaslkdhj",
        firstName: "asdfasdf",
        lastName: "asdfasdfasd",
        mail: "fasdfas@gmail.com",
        phoneNumber: "0329482309",
        Language: ['english', 'arabic'],
        age: '23',
        address: 'balbal'
      },
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id dolores veniam nostrum, nesciunt soluta minus sed, ducimus",
      expiriense: [ {
        jobTitle: "dasdasd",
        employer: "asdasd",
        Sdate: "asdasd",
        Edate: "asdasdasd",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non exercitationem eos, voluptas rerum unde cum ipsa quod illo tempora quo at esse fugit, excepturi voluptatem deserunt neque suscipit in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sunt voluptatem quidem nulla. Repudiandae error maiores numquam vero temporibus velit aut sapiente tenetur placeat labore dolorum, rem.",
      },
     
   
      
    ],
      educaition: [],
      techs: {
        best: {
          techs: [{ value: "sql", label: "sql" }, { value: "js", label: "js" }, { value: "httml", label: "html" }, { value: "httml", label: "html" }, { value: "httml", label: "html" }, { value: "httml", label: "html" }],
          level: '88'
        },
        seconed: {
          techs: [{ value: "pyton", label: "pyton" },
          { value: "as", label: "as" }, { value: "pyton", label: "pyton" }, { value: "pyton", label: "pyton" }],
          level: '76'
        },
        rest: [{ value: "html", label: "html" }, { value: "html", label: "html" }, { value: "html", label: "html" }],

        links: {
          linkdin: "https://www.linkedin.com/in/david-kvart-4b16ba256/",
          gitHub: "https://github.com/DavidKvart/MInesweaperDemo",
        },
      }
    },
  };

  render() {

    return (



      <div className="contianer-intro">
        <body className="d-flex h-100 text-center text-bg-dark">
          <Container fluid xxl>
            <Row>
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="mb-auto">
                  <div>
                    <h3 className="float-md-start mb-0">ResuMaker</h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                      <a
                        className="nav-link fw-bold py-1 px-0 active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                      <a className="nav-link fw-bold py-1 px-0" href="#">
                        Features
                      </a>
                      <a className="nav-link fw-bold py-1 px-0" href="#">
                        Contact
                      </a>
                    </nav>
                  </div>
                </header>
              </div>
            </Row>

            <Row style={{ height: "90vh" }}>
              <Routes>
                <Route path="/" element={<Inderdoction />} />
                <Route
                  path="/personal"
                  element={
                    <PersonalInfo
                      handlePersonalInfo={(personalInfo) =>
                        this.handlePersonalInfo(personalInfo)
                      }
                      handlePersonalInfo_Multis={(selectedOptions) =>
                        this.handlePersonalInfo_Multis(selectedOptions)
                      }
                    />
                  }
                />
                <Route
                  path="/about"
                  element={
                    <About handleAbout={(aboutInfo) => this.handleAbout(aboutInfo)} />
                  }
                />
                <Route
                  path="/ex"
                  element={<Experience handleXP={(xpArr) => this.handleXP(xpArr)} />}
                />
                {/* <Route
                  path="/skills"
                  element={
                    <Skills
                      handleSkills={(skillsArr) => this.handleSkills(skillsArr)}
                    />
                  }
                /> */}
                <Route
                  path="/educaition"
                  element={
                    <Educaition
                      handleEducaition={(educaitionInfo) =>
                        this.handleEducaition(educaitionInfo)
                      }
                    />
                  }
                />
                <Route
                  path="/techs"
                  element={
                    <Techs
                      handleLinks={(links) => this.handleLinks(links)}
                      handleBesttechs={(picks) => { this.handleBesttechs(picks) }}
                      handleSeconedtechs={(picks) => { this.handleSeconedtechs(picks) }}
                      handleRestofTechs={(picks) => { this.handleRestofTechs(picks) }}
                    />
                  }
                />
                <Route path="/final" element={<FinnalDisplay resume={this.state.resume} />} />
              </Routes>
            </Row>
          </Container>
        </body>
      </div>

    );
  }
  handleAbout = (aboutInfo) => {
    let resume = this.state.resume;
    resume.about = aboutInfo;
    this.setState({ resume });
  }
  ////both for personal info//////////////
  handlePersonalInfo = (personalInfo) => {
    let resume = this.state.resume;
    resume.personalInfo.firstName = personalInfo.firstName;
    resume.personalInfo.lastName = personalInfo.lastName;
    resume.personalInfo.mail = personalInfo.mail;
    resume.personalInfo.phoneNumber = personalInfo.phoneNumber;
    resume.personalInfo.wills = personalInfo.wills;
    this.setState({ resume });
  };
  handlePersonalInfo_Multis = (selectedOptions) => {
    let resume = this.state.resume;
    resume.personalInfo.Language[0] = selectedOptions[0].value;

    this.setState({ resume });
  };
  ///////////////////////////////////////

  handleSkills = (skillsArr) => {
    let resume = this.state.resume;
    resume.skills.push(skillsArr);
    this.setState({ resume });
  };
  handleXP = (xpArr) => {
    let resume = this.state.resume;
    resume.expiriense.push(xpArr);
    this.setState({ resume });
  };
  handleEducaition = (educaitionInfo) => {
    let resume = this.state.resume;
    resume.educaition.push(educaitionInfo);
    this.setState({ resume });
  };

  ////both for techs//////////////
  handleBesttechs = (picks) => {
    let resume = this.state.resume;
    resume.techs.best.techs = picks;
    this.setState({ resume });
  };

  handleSeconedtechs = (picks) => {
    let resume = this.state.resume;
    resume.techs.seconed.techs = picks;
    this.setState({ resume });
  };

  handleRestofTechs = (picks) => {
    let resume = this.state.resume;
    resume.techs.rest.techs = picks;
    this.setState({ resume });

  };




  handleLinks = (links) => {
    let resume = this.state.resume;
    resume.techs.best.level = links.best;
    resume.techs.seconed.level = links.seconed;
    resume.techs.links.linkdin = links.linkdinLink;
    resume.techs.links.gitHub = links.githubLink;

    this.setState({ resume });
  };
  ///////////////////////////////
}

