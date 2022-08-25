import Header from "./components/Header";
import SectionContainer from "./components/SectionContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import bankingIcon from "./assets/icon-online.svg";
import budgeting from "./assets/icon-budgeting.svg";
import boardingIcon from "./assets/icon-onboarding.svg";
import apiIcon from "./assets/icon-api.svg";

import image1 from "./assets/image-confetti.jpg"
import image2 from "./assets/image-currency.jpg"
import image3 from "./assets/image-plane.jpg"
import image4 from "./assets/image-restaurant.jpg"

function App() {
  return (
    <>
      <Navbar />

      <Header />

      <div className="bg-extra-light">
        <SectionContainer>
          <div className="py-10">
          <h2 className="capitalize py-5 text-xl lg:text-3xl">why choose Easybank</h2>
          <p className="text-sm pb-6 opacity-70 w-full lg:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed
            nesciunt quisquam velit voluptas quia eum error nam repellendus
            amet?
          </p>
          <div className="py-5 flex flex-col lg:flex-row flex-wrap justify-between">
            <div className="w-[90%] lg:w-[23%] mx-auto lg:mx-0">
              <img src={bankingIcon} alt="the service 1" />
              <h3 className="capitalize text-xl py-4">Online banking</h3>
              <p className="opacity-70 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
            <div className="w-[90%] lg:w-[23%] mx-auto lg:mx-0">
              <img src={budgeting} alt="the service 1" />
              <h3 className="capitalize text-xl py-4">simple budgeting</h3>
              <p className="opacity-70 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
            <div className="w-[90%] lg:w-[23%] mx-auto lg:mx-0">
              <img src={boardingIcon} alt="the service 1" />
              <h3 className="capitalize text-xl py-4">fast onboarding</h3>
              <p className="opacity-70 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
            <div className="w-[90%] lg:w-[23%] mx-auto lg:mx-0">
              <img src={apiIcon} alt="the service 1" />
              <h3 className="capitalize text-xl py-4">open Api</h3>
              <p className="opacity-70 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
          </div>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer>
        <div className="py-10">
        <h2 className="text-xl lg:text-3xl py-7 capitalize">latest article</h2>
        <div className="flex flex-col lg:flex-row flex-wrap justify-between">
          <div className="bg-white rounded-md w-[90%] lg:w-[23%] mx-auto lg:mx-0">
            <div className="w-full h-[150px]">
              <img src={image1} alt="the service 1" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs opacity-70">By Nafas Ebrahimi</p>
              <h3 className="capitalize text-xl my-2">
                <a href="#" className="hover:text-green">
                  Online banking
                </a>
              </h3>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md w-[90%] lg:w-[23%] mx-auto lg:mx-0">
            <div className="w-full h-[150px]">
              <img src={image2} alt="the service 1" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs opacity-70">By Nafas Ebrahimi</p>
              <h3 className="capitalize text-xl my-2">
                <a href="#" className="hover:text-green">
                  Online banking
                </a>
              </h3>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md w-[90%] lg:w-[23%] mx-auto lg:mx-0">
            <div className="w-full h-[150px]">
              <img src={image3} alt="the service 1" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs opacity-70">By Nafas Ebrahimi</p>
              <h3 className="capitalize text-xl my-2">
                <a href="#" className="hover:text-green">
                  Online banking
                </a>
              </h3>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md w-[90%] lg:w-[23%] mx-auto lg:mx-0">
            <div className="w-full h-[150px]">
              <img src={image4} alt="the service 1" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs opacity-70">By Nafas Ebrahimi</p>
              <h3 className="capitalize text-xl my-2">
                <a href="#" className="hover:text-green">
                  Online banking
                </a>
              </h3>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
          </div>
        </div>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
}

export default App;
