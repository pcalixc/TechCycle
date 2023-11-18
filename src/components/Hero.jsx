import styles from "../style";
import Button from "./Button";
import Animation from "./Animation";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className="flex flex-row justify-between items-center w-full p-0 m-0">
          <h1 className=" p-0 m-0 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] ">
            <span className="text-gradient p-0 m-0">TechCycle</span>{" "}
          </h1>
        </div>
        <h6 className="font-poppins p-0 m-0 font-semibold ss:text-[38px] text-[32px] text-balck w-full">
        by TechTitans
        </h6>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Nos comprometemos a abordar el desafío ambiental asociado con los desechos de componentes electrónicos...
        </p>
        <Button/>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <Animation/>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

     
  
    </section>
  );
};

export default Hero;
