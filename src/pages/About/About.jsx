import './About.css';
import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoGithub,
  IoLogoNpm,
} from 'react-icons/io';
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiDjango,
  SiPostgresql,
  SiBootstrap,
  SiTailwindcss,
  SiDaisyui,
} from 'react-icons/si';
import { ImGit } from 'react-icons/im';

export default function About() {
  return (
    <div id='about'>
      <hr />
      <h1>
        From <span className='fa-solid fa-screwdriver-wrench'></span> To{' '}
        <span className='fa-solid fa-code'></span>
      </h1>

      <p>
        I am a Software Engineer with a background and work experience in
        Industrial Engineering.
        <br />
        In my previous job experiences I worked closely with software suppliers
        doing Business Analysis and Quality Assurance to implement new software
        for the factory.
        <br />
        This has provided me the experience necessary to liaise with clients and
        suppliers throughout a full software life cycle.
      </p>

      <div>
        <div>
          <AiFillHtml5 />
          <label>HTML</label>
        </div>
        <div>
          <IoLogoCss3 />
          <label>CSS</label>
        </div>
        <div>
          <IoLogoJavascript />
          <label>JavaScript</label>
        </div>

        <div>
          <SiReact />
          <label>React</label>
        </div>
        <div>
          <IoLogoNodejs />
          <label>Node.js</label>
        </div>
        <div>
          <SiExpress />
          <label>Express.js</label>
        </div>
        <div>
          <IoLogoPython />
          <label>Python</label>
        </div>
        <div>
          <SiDjango />
          <label>Django</label>
        </div>
        <div>
          <SiMongodb />
          <label>MongoDB</label>
        </div>
        <div>
          <SiPostgresql />
          <label>PostgreSQL</label>
        </div>

        <div>
          <SiBootstrap />
          <label>Bootstrap</label>
        </div>
        <div>
          <SiTailwindcss />
          <label>Tailwind</label>
        </div>
        <div>
          <SiDaisyui />
          <label>daisyUI</label>
        </div>
        <div>
          <IoLogoNpm />
          <label>npm</label>
        </div>
        <div>
          <ImGit />
          <label>Git</label>
        </div>
        <div>
          <IoLogoGithub />
          <label>GitHub</label>
        </div>
      </div>
    </div>
  );
}
