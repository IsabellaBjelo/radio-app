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

  //  <h1>{programInCat.programcategory.name}</h1>

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

/* <div key={i} className={style.cards} onClick={() => handleClick(channel.channelId)} >
  <div className={style.channelContainer}>
    <div className={style.channelName}>
      <p>{channel.name}</p>
    </div>
    <div className={style.logo}>
      <img src={channel.image} alt="channel logo"/>
    </div>
    <div className={style.tagline}>
      <p>{channel.tagline}</p>
    </div>
  </div>
</div> */