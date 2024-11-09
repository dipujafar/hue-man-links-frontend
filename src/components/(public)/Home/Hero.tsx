import banner1 from "@/assets/Images/banner1.png";
import TopBanner from "@/components/shared/TopBanner";
const Hero = () => {
  return (
    <div>
      <TopBanner
        image={banner1}
        title={`Specialized Sitters, Stronger Links:`}
        BannerTitle="Connecting Care with Compassion"
        titleClass="xl:text-6xl lg:text-5xl md:text-4xl	 text-lg   text-primary-white font-semibold text-nowrap  overflow-hidden"
        contentClass="absolute lg:top-1/2 lg:-translate-y-10 top-1/3"
        imageClass="max-h-[100vh] "
        btn="How to Connect with Specialized Links"
        btnClass=" bg-primary-orange font-medium py-8  text-lg "
        btnLink="/specialized-links"
      />
    </div>
  );
};

export default Hero;
