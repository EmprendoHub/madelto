import SubscribeForm from "@/components/forms/SubscribeForm";
import ContactComponent from "@/components/layout/ContactComponent";
import Image from "next/image";
import React from "react";
import coverImage from "../../../public/images/contact_us.webp";

const ContactInner = ({ homeDic, contactDic, lang }) => {
  return (
    <div className="relative h-full  overflow-x-hidden" id="contacto">
      <ContactComponent contactDic={contactDic} homeDic={homeDic} />
      <div className="w-full h-[400px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        <div className="absolute bg-dark bg-opacity-40 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={400}
          priority
          loading="eager"
          alt="contact cover image"
          className="object-cover h-full w-full"
        />
        <div className="absolute z-10 text-white text-5xl maxsm:text-3xl  font-primary w-[50%] maxsm:w-[80%] text-center">
          <p className="uppercase text-xs tracking-widest font-secondary">
            {contactDic.hero.pretitle}
          </p>
          <h3>{contactDic.hero.title}</h3>
        </div>
      </div>

      <div className="w-[100%] px-3map-class">
        <iframe
          className="border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59956.373676692456!2d-102.80667919285982!3d20.080856869774085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842ee358a9ee7b9b%3A0x695561fc5e3327ae!2sMADELTO%20REMOLQUES%2C%20S.A.%20DE%20C.V.!5e0!3m2!1ses-419!2smx!4v1737900600303!5m2!1ses-419!2smx"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInner;
