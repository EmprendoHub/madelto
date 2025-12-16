import React from "react";

const VideoHero = ({ homeDic }) => {
  return (
    <div className="bg-dark dark:bg-primary">
      <div className="w-full h-[800px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        {/* overlay */}
        <div className="absolute bg-black bg-opacity-60 w-full h-full z-0" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover h-full w-full"
        >
          <source
            src="https://minio.salvawebpro.com:9000/madelto/videos/VIDEO%20FONDO%20MADELTO_small.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-40 left-20  maxlg:left-5 z-10 text-white text-8xl maxlg:text-7xl maxmd:text-6xl font-primary w-[60%] maxmd:w-[70%] maxsm:w-[80%] ">
          <h2 className="font-primary leading-none mb-3">
            <span className="text-primary dark:text-white font-black ">
              {homeDic.imageHero.title}{" "}
            </span>
            <span className="text-white dark:text-primary font-black ">
              {homeDic.imageHero.titleTwo}
            </span>
          </h2>
          <p className="font-secondary text-4xl maxlg:text-3xl maxmd:text-2xl font-medium mb-1 text-white">
            {homeDic.imageHero.pretitle}
          </p>
          <p className="font-secondary text-sm mb-1">
            {homeDic.imageHero.subtitle}
          </p>
          <div className="text-gray-300 font-secondary  mb-8  text-2xl maxlg:text-xl maxmd:text-lg flex flex-col gap-3">
            <p className=" flex items-center gap-2">{homeDic.imageHero.text}</p>
          </div>
          {/* <button
            aria-label="Contactar"
            className="bg-primary dark:bg-dark px-10 py-3 text-white flex items-center justify-center uppercase text-xs tracking-widest"
          >
            {homeDic.imageHero.btnText}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
