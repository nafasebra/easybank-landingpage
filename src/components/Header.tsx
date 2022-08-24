import Button from "./Button";
import heroImage from "../assets/hero-image.jpg";

function Header() {
  return (
    <header className="flex flex-col-reverse lg:flex-row items-center w-full lg:w-[990px] mx-auto">
      <div className="text-center w-full px-4 py-10 lg:w-[45%] lg:text-left lg:py-20 mx-auto text-white">
        <hr className="hidden lg:block border-white mb-10 w-20" />
        <h1 className="text-2xl lg:text-4xl font-bold leading-10 pb-5 capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h1>
        <p className="text-sm opacity-70 mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          repudiandae magnam tempora repellendus ad suscipit quo praesentium
          nisi dolor debitis.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button
            target="http://nothing.com"
            textButton="VIEW PACKS"
            customStyles="text-white border-white hover:text-black hover:bg-white"
          />
        </div>
      </div>
      <div className="w-full lg:w-[40%] mx-auto relative">
        <img src={heroImage} className="w-full relative lg:absolute bottom-auto lg:-bottom-[350px]" alt="" />
      </div>
    </header>
  );
}

export default Header;
