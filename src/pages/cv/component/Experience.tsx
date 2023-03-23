import { useSelector } from 'react-redux'
import { TypeExperience } from '../../../assert/ts/MessageType'
import { TypeStore } from '../../../redux/TypeStore';
import css from './css/experience.module.scss'

function Experience() {
  const experiences: Array<TypeExperience> = useSelector((state: TypeStore) => state.userState.message.experiences)

  return (
    <div className={css.experiences}>
      {experiences.map((experience) => (
        <div className={css.experience}>
          <div className={css.detail + ' clearfix'}>
            <div className='fl'>{experience.startTime + '-' + experience.endTime}</div>
            <div className='fr'>{experience.company}</div>
          </div>
          <div className={css.position}>{experience.position}</div>
          {experience.project.map((project) => (
            <div className='project'>
              <div className='name'>{project.name}</div>
              <p>
                <div className='title'>技术栈</div>
                <div className='detail'>{project.tech}</div>
              </p>
              <p>
                <div className='title'>详情</div>
                <div className='detail'>{project.introduce}</div>
              </p>

              <p>
                <div className='title'>职责</div>
                <div className='detail'>{project.duty}</div>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Experience;