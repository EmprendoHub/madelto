"use client";

import SectionTitle from "../titles/SectionTitle";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CategoriesComp = ({ categoryDic, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const closeModal = () => setSelectedCategory(null);

  useEffect(() => {
    if (!selectedCategory) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCategory]);

  return (
    <>
      <div
        id="productos"
        className="pt-5 px-40 maxxlg:px-20 maxlg:px-10 maxmd:px-5 maxmd:pt-1 my-20"
      >
        <div className="mx-auto">
          <SectionTitle
            className="pb-10 text-3xl maxmd:text-3xl text-center"
            title={categoryDic.title}
            titleTwo={categoryDic.titleTwo}
            subtitle={categoryDic.text}
          />
        </div>
        <div className="flex maxmd:flex-wrap items-center gap-5 w-full">
          {categoryDic.categories.map((category) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className="w-full cursor-pointer hover:scale-[105%] duration-700 ease-in-out text-left"
              aria-label={`Open details for ${category.title}`}
            >
              <div className="box relative mx-auto items-center justify-center flex text-center rounded-xl overflow-hidden">
                <Image
                  src={category.imgPath}
                  width={600}
                  height={600}
                  alt={category.title}
                  className="w-full h-[500px] maxxlg:h-[350px] object-cover"
                />
                <span className="absolute rounded-full z-10 text-white uppercase py-2 px-8 text-4xl maxmd:text-4xl top-[40%] font-primary tracking-wide">
                  {category.title}
                </span>
                <span className="absolute z-10 bottom-24 bg-primary px-6 py-2 text-white flex items-center justify-center uppercase text-sm tracking-widest mx-auto">
                  {category.btnText}
                </span>
                {/* overlay */}
                <div className="min-h-[100%] absolute z-[1] min-w-[100%] top-0 left-0 bg-black bg-opacity-40" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-700"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCategory.title}
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 ease-out"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white text-xl hover:bg-black transition-colors"
              aria-label="Close category modal"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">
              <Image
                src={selectedCategory.ModalImage}
                width={1200}
                height={900}
                alt={selectedCategory.title}
                className="w-full h-[320px] md:h-full object-cover"
              />

              <div className="p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-primary text-black uppercase tracking-wide mb-4">
                  {selectedCategory.title}
                </h3>
                <p className="text-base md:text-lg text-black/80 leading-relaxed">
                  {selectedCategory.ModalDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoriesComp;
