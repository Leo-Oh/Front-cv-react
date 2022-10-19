import React from 'react';
import CreateContact from './crud_components/CreateContact'
import CreateEducation from './crud_components/CreateEducation';
import CreateExperience from './crud_components/CreateExperience';
import CreateIntereses from './crud_components/CreateIntereses';
import CreateLanguaje from './crud_components/CreateLanguage';
import CreateSkills from './crud_components/CreateSkills';
import Curriculum from './Curriculum';

const Crud = () => {

  return (
    <div className="container">
      <nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
        <a class="navbar-brand" href="/">CV</a>
        <ul class="nav nav-pills">
        <h4 id="scrollspyHeading2"><Curriculum /></h4>

        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
        <h4 id="scrollspyHeading1"><CreateContact /></h4>
        <h4 id="scrollspyHeading2"><CreateEducation /></h4>
        <h4 id="scrollspyHeading3"><CreateExperience /></h4>
        <h4 id="scrollspyHeading4"><CreateIntereses /></h4>
        <h4 id="scrollspyHeading5"><CreateLanguaje /></h4>
        <h4 id="scrollspyHeading5"><CreateSkills /></h4>
      </div>
    </div>
  );
};


export default Crud;
