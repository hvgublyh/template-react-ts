import Header from './component/Header'
import Education from './component/Education';
import Skill from './component/Skill';
import Experience from './component/Experience';

function CV() {
  return (
    <div className='cv'>
      <Header></Header>
      <div className="title float-left">教育背景</div>
      <Education></Education>
      <div className="title float-left">专业技能</div>
      <Skill></Skill>
      <div className="title float-left">工作经验</div>
      <Experience></Experience>
    </div>
  );
}

export default CV;