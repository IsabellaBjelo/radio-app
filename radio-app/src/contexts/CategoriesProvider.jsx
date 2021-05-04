import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [programByCat, setProgramByCat] = useState([]);


  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    let categories = await fetch("/api/v1/categories");
    categories = await categories.json();
    setCategories(categories.programcategories);
  };

  const getProgramByCat = async (programCategoryId) => {
    let programByCat = await fetch(`/api/v1/programs/category/${programCategoryId}`)
    programByCat = await programByCat.json();
    setProgramByCat(programByCat.programs);
  };

  const values = {
    categories,
    programByCat,
    getProgramByCat,
  }

  return (
    <CategoriesContext.Provider value={values}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
 
export default CategoriesProvider;