import React from "react";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="w-full bg-primary min-h-screen flex flex-col items-center justify-center">
      <Image
        alt={"Madelto"}
        src={"/logos/LOGO_MADELTO_WHITE.svg"}
        width={500}
        height={500}
      />
    </div>
  );
};

export default ComingSoon;
