import React from "react";
import { imgs, categories } from "../data";
import { CategoryCard } from "./CategoryCard"

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
  imgArte,
  imgCine,
] = imgs;

export const CategoryList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 ">

      {/* Category Link Ciencia */}

      <CategoryCard 
          category={categories.ciencia} 
          src={imgCiencia} 
          alt={`Categoria ${categories.ciencia}`} 
          gradientColor='from-purple-500 to-pink-500' 
      />

      {/* Category Link Deportes */}

      <CategoryCard 
          category={categories.deportes} 
          src={imgDeportes} 
          alt={`Categoria ${categories.deportes}`} 
          gradientColor=' from-lime-400 to-teal-500' 
      />

      {/* Category Link Filosofia */}

      <CategoryCard 
          category={categories.filosofia} 
          src={imgFilosofia} 
          alt={`Categoria ${categories.filosofia}`} 
          gradientColor='from-orange-600 to-yellow-400' 
      />

      {/* Category Link Geografia */}

      <CategoryCard 
          category={categories.geografia} 
          src={imgGeografia} 
          alt={`Categoria ${categories.geografia}`} 
          gradientColor=' from-indigo-400 to-emerald-400' 
      />

      {/* Category Link Historia */}

      <CategoryCard 
          category={categories.historia} 
          src={imgHistoria} 
          alt={`Categoria ${categories.historia}`} 
          gradientColor='from-rose-600 to-pink-500' 
      />

      {/* Category Link Literatura */}

      <CategoryCard 
          category={categories.literatura} 
          src={imgLiteratura} 
          alt={`Categoria ${categories.literatura}`} 
          gradientColor='from-blue-500 to-sky-300' 
      />

      {/* Category Link Tecnología */}

      <CategoryCard 
          category={categories.tecnologia} 
          src={imgTecnologia} 
          alt={`Categoria ${categories.tecnologia}`} 
          gradientColor=' from-red-600 to-orange-500' 
      />

      {/* Category Link Arte */}

      <CategoryCard 
          category={categories.arte} 
          src={imgArte} 
          alt={`Categoria ${categories.arte}`} 
          gradientColor='from-green-600 to-emerald-500' 
      />
      
      {/* Category Link Cine */}

      <CategoryCard 
          category={categories.cine} 
          src={imgCine} 
          alt={`Categoria ${categories.cine}`} 
          gradientColor='from-fuchsia-800 to-violet-400' 
      />
      
    </div>
  );
};
