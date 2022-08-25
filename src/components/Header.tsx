import Button from "./Button";
import heroImage from "../assets/image-mockups.png";

function Header() {
  return (
    <header className="flex flex-col-reverse lg:flex-row items-center w-full lg:w-[990px] mx-auto">
      <div className="text-center w-full px-4 py-10 lg:w-[45%] lg:text-left lg:py-20 mx-auto">
        <hr className="hidden lg:block border-white mb-10 w-20" />
        <h1 className="text-2xl lg:text-4xl leading-10 pb-5 capitalize">
          Next generation digital banking
        </h1>
        <p className="text-sm opacity-70 mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          repudiandae magnam tempora repellendus ad suscipit quo praesentium
          nisi dolor debitis.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button
            target="http://nothing.com"
            textButton="request invite"
          />
        </div>
      </div>
      <div className="w-full lg:w-[40%] mx-auto relative">
        <img src={heroImage} className="w-full" alt="" />
      </div>
    </header>
  );
}

export default Header;
