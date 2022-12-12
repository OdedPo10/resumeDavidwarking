import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import PersonalInfo from "./components/personalInfo";
import Skills from "./components/skillsItme";
import Experience from "./components/experience";
import Educaition from "./components/educaition";
import Techs from "./components/techs";
import Inderdoction from "./components/interdoction";

export default class Main extends Component {
  state = {
    resume: {
      personalInfo: {
        wills: "",
        firstName: "",
        lastName: "",
        mail: "",
        phoneNumber: "",
        driverLicense: [],
      },
      about: "",
      expiriense: [],
      educaition: [],
      techs: [],
      links: {
        linkdin: "",
        gitHub: "",
      },
      skills: [],
    },
  };

  render() {
    console.log(this.state.resume);
    return (
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
        <Route
          path="/skills"
          element={
            <Skills
              handleSkills={(skillsArr) => this.handleSkills(skillsArr)}
            />
          }
        />
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
              handleTechs={(picks) => this.handleTechs(picks)}
              handleLinks={(links) => this.handleLinks(links)}
            />
          }
        />
      </Routes>
    );
  }
  handleAbout = (aboutInfo) => {
    let resume = this.state.resume;
    resume.about = aboutInfo;
    this.setState({ resume });
  };

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
    resume.personalInfo.driverLicense[0] = selectedOptions[0].value;
    console.log(resume);
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
  handleTechs = (picks) => {
    let resume = this.state.resume;
    resume.techs = picks;
    this.setState({ resume });
  };
  handleLinks = (links) => {
    let resume = this.state.resume;
    resume.links.linkdin = links.linkdinLink;
    resume.links.gitHub = links.githubLink;
    this.setState({ resume });
  };
  ///////////////////////////////
}
