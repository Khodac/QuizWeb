import React from "react";
import { Link } from "react-router-dom";
import { imgs, categories } from "../data";

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
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">

      {/* Category Link Ciencia */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgCiencia}
            alt={`Categoria ${categories.ciencia}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.ciencia}
        </h1>

      </Link>


      {/* Category Link Deportes */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgDeportes}
            alt={`Categoria ${categories.ciencia}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.deportes}
        </h1>

      </Link>


      {/* Category Link Filosofia */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgFilosofia}
            alt={`Categoria ${categories.ciencia}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.filosofia}
        </h1>

      </Link>


      {/* Category Link Geografia */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgGeografia}
            alt={`Categoria ${categories.ciencia}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.geografia}
        </h1>

      </Link>


      {/* Category Link Historia */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgHistoria}
            alt={`Categoria ${categories.ciencia}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.historia}
        </h1>

      </Link>


      {/* Category Link Literatura */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgLiteratura}
            alt={`Categoria ${categories.ciencia}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.literatura}
        </h1>

      </Link>


      {/* Category Link Tecnología */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgTecnologia}
            alt={`Categoria ${categories.ciencia}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.tecnologia}
        </h1>

      </Link>


      {/* Category Link Arte */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgArte}
            alt={`Categoria ${categories.arte}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.arte}
        </h1>

      </Link>


      {/* Category Link Cine */}

      <Link

        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">

          <img
            src={imgCine}
            alt={`Categoria ${categories.ciencia}`}
            className="w-36" />

        </div>

        <h1
          className="p-4 text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60">
          {categories.cine}
        </h1>

      </Link>
    </div>
  );
};
