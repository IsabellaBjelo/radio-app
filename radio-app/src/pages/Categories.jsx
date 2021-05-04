import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { CategoriesContext } from '../contexts/CategoriesProvider';
import style from '../css/Categories.module.css'

const Categories = () => {
  const history = useHistory();
  const { categories, programByCat, getProgramByCat } = useContext(CategoriesContext);

  const handleClick = async (cat) => {
    await getProgramByCat(cat.id)
    history.push({
      pathname: '/programByCategory',
      state: {
        name: cat.name,
        data: programByCat,
      }
    })
  }


  const renderCategories = () => {
    return categories.map((cat, i) => (
      <div key={i} className={style.cards}>
        <div className={style.catName} onClick={() => handleClick(cat)}>
          <p>{cat.name}</p>
        </div>
      </div>
    ))
  }

  return (
    <div className={style.categories}>
      <h1>Kategorier</h1>
      <div className={style.wrapper}>
        {categories && renderCategories()}
      </div>
    </div>
  );
}
 
 
export default Categories;
