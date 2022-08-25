import Header from "./components/Header";
import SectionContainer from "./components/SectionContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import bankingIcon from "./assets/icon-online.svg";
import budgeting from "./assets/icon-budgeting.svg";
import boardingIcon from "./assets/icon-onboarding.svg";
import apiIcon from "./assets/icon-api.svg";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Navbar />

      <Header />

      <div className="bg-extra-light py-10">
        <SectionContainer>
          <h2 className="capitalize">why choose Easybank</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed
            nesciunt quisquam velit voluptas quia eum error nam repellendus
            amet?
          </p>
          <div className="flex flex-col lg:flex-row flex-wrap justify-between">
            <div className="w-[90%] lg:w-[22%] mx-auto">
              <img src={bankingIcon} alt="the service 1" />
              <h3 className="capitalize">Online banking</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
            <div className="w-[90%] lg:w-[22%] mx-auto">
              <img src={budgeting} alt="the service 1" />
              <h3 className="capitalize">simple budgeting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
            <div className="w-[90%] lg:w-[22%] mx-auto">
              <img src={boardingIcon} alt="the service 1" />
              <h3 className="capitalize">fast onboarding</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
            <div className="w-[90%] lg:w-[22%] mx-auto">
              <img src={apiIcon} alt="the service 1" />
              <h3 className="capitalize">open Api</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam ad velit laboriosam ex corporis?
              </p>
            </div>
          </div>
        </SectionContainer>
      </div>

      <Footer />
    </>
  );
}

export default App;
