import HeroSlider from "@/components/sliders/HeroSlider";
import { getDictionary } from "@/lib/dictionary";
import ImageHero from "@/components/sliders/ImageHero";
import SingleSideToSide from "@/components/home/SingleSideToSide";
import IconGridComp from "@/components/home/IconGridComp";
import CategoriesComp from "@/components/home/CategoriesComp";
import ContactInner from "@/components/contact/ContactInner";
import ComingSoon from "@/components/layout/ComingSoon";

export default async function Home({ params }) {
  const lang = params.lang;
  const { homeDic, servicesDic, flipBoxes, contactDic, categoryDic } =
    await getDictionary(lang);
  return (
    <div className=" overflow-x-hidden">
      {/* <ImageHero homeDic={homeDic} />
      <HeroSlider homeDic={homeDic} />
      <CategoriesComp categoryDic={categoryDic} lang={lang} />
      <SingleSideToSide flipBoxes={flipBoxes} homeDic={homeDic} />
      <IconGridComp servicesDic={servicesDic} />
     
      <ContactInner homeDic={homeDic} contactDic={contactDic} /> */}
      <ComingSoon />
    </div>
  );
}
