import { useLocation } from 'react-router-dom';

import style from '../css/ProgramByCategory.module.css'

const ProgramByCategory = () => {
  const { state } = useLocation();

  const programInCat = state.data.map((programInCat, i) => {
    return (
      <div key={i} className={style.cards}>
        <div className={style.programsBox}>
          <div>
            <img src={programInCat.programimagewide} alt="program"/>
          </div>
          <div className={style.programText}>
            <div className={style.programsName}>
              <h3>{programInCat.name}</h3>
            </div>
            <div>
              <p>{programInCat.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className={style.programsContainer}>
      <h1>{state.name}</h1>
      <div className={style.programsWrapper}>
        {programInCat}
      </div>
    </div>
  );
}
 
export default ProgramByCategory;
