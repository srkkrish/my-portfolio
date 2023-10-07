import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Hello Everyone, I am Siva!";
  progressBarValue = 1;
  showProgressBar = true;
  skillsData: Array<any> = [
    { skill: 'HTML5', value: '90%' },
    { skill: 'CSS3', value: '80%' },
    { skill: 'JavaScript', value: '80%' },
    { skill: 'Angular', value: '90%' },
    { skill: 'Bootstrap', value: '95%' }
  ];
  workData: Array<any> = [
    {
      company: 'Global Software Solutions, Tirunelveli', role: 'Software Developer | JAN 2017 - APR 2019', icon: 'fa fa-globe',
      desc: `<ul>
      <li>Involved in the design of both web and mobile application using Ionic and Angular Framework.</li>
      <li>Integration of cordova plugins with mobile app and testing the application using emulator.</li>
      <li>Design of advanced UI forms and components.</li>
      <li>Integration of backend API with UI.</li>
      </ul>`
    },
    {
      company: 'FIS Global Business Solutions, Chennai', role: 'Software Engineer | MAY 2019 - SEP 2021', icon: 'fa fa-bank',
      desc: `<ul>
      <li>Worked for developing the UI templates, dashboards and grids for the application.</li>
      <li>Following the UI/UX guidelines as per the client requirement.</li> 
      <li>Fixing the bugs raised by the QA team and unit testing them.</li>
      <li>Integration of third party modules and API with the application.</li>
      <li>Worked for the monthly releases and prepared for the release.</li> 
      <li>Helping resources for the critical issues.</li>
      </ul>` },
    {
      company: 'Sopra Steria, Chennai', role: 'Module Lead | SEP 2021 - Present', icon: 'fa fa-laptop',
      desc: `<ul>
      <li>Worked as a Lead for the UI team and developing the application as per the business requirements.</li>
      <li>Handled the Front-end part of the application by creating the components,services and adding styles for the application.</li>
      <li>Managed the end to end functionalities in the UI.</li> 
      <li>Developing the pages as per the mock and ensuring the font and styles.</li>
      <li>Taking suggestions from the client and team for the application changes and fixed.</li>
      <li>Implemented the lazy loading, micro frontend, debounce concepts, virtual scroll and other features to increase the application performance.</li>
      <li>Guiding the junior resources for their task and explaining about the code standards.</li>
      <li>Worked for the Angular migration from version 13 to 16 and resolved the issues.</li>
      <li>Has an eye for the detailed development of the application.</li>
    </ul>` }
  ];

  constructor() {
  }

  ngOnInit() {
    // setTimeout(() => {
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        this.progressBarValue = i;
        if (this.progressBarValue == 100) this.showProgressBar = false;
      }, i * 50);
    }
    // }, 100)
  }

  downloadResume() {
    // let url = 'https://drive.google.com/file/d/1zZfncGt7pCRummY6U2C629OkcGFbtKAb/view?usp=sharing';
    let url = 'https://resume-sivaramakrishnan-oct-2023.tiiny.site';
    // let url = 'https://drive.google.com/file/d/11x0DceT6UIwpc063gEoK2wpIoHjZBcDS/view?usp=sharing';
    window.open(url, '_blank');
  }
}
