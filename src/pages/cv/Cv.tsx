import Header from './component/Header'
import Education from './component/Education';
import Skill from './component/Skill';
import Experience from './component/Experience';

import './css/cv.module.scss'

function CV() {
  return (
    <div className='cv'>
      <Header></Header>
      <Education></Education>
      <Skill></Skill>
      <Experience></Experience>
    </div>
  );
}

export default CV;