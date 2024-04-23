
import img1 from "../../../assets/10.png";
import { RiBriefcase2Fill } from "react-icons/ri";
import { FaPuzzlePiece } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const WhyChooseUs = () => {
  return (
    <div>
      <SectionTitle
       subHeading="Why Choose Us"
       heading="Making Life Cleaner
       and Easier">

      </SectionTitle>

      <div className=" mx-auto p-5  text-gray-100">
        <div className="flex flex-col max-w-7xl mx-auto overflow-hidden rounded">
          <img src={img1} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md bg-[#BFDBF7]">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-10">
                <div className="flex gap-3">
                  <RiBriefcase2Fill className="text-8xl bg-[#1F7A8C] text-[#022B3A] rounded-full w-80 p-3" />

                  <div><h2 className=" text-2xl font-bold text-[#022B3A]">
                    {" "}
                    Professional Excellence:
                  </h2>
                  <h1 className="text-lg mt-4 text-[#022B3A]">
                    {" "}
                    We are dedicated to delivering nothing short of professional excellence. Our team is comprised of experienced professionals who are trained in the latest cleaning techniques.. 
                  </h1></div>
                </div>
                <div className="flex gap-3">
                  <FaPuzzlePiece className="text-8xl bg-[#1F7A8C] text-[#022B3A] rounded-full w-80 p-3" />

                <div>
                <h2 className=" text-2xl font-bold text-[#022B3A]">
                    {" "}
                    Customized Solutions:
                  </h2>
                  <h1 className="text-lg mt-4 text-[#022B3A]">
                    {" "}
                    We understand that every space is unique, and so are the cleaning needs. That&apos;s why we offer customized solutions tailored to fit your specific requirements. 
                  </h1>
                </div>
                </div>
                <div className="flex gap-3">
                  <GrMoney className="text-8xl bg-[#1F7A8C] text-[#022B3A] rounded-full w-80 p-3" />
                  <div>
                  <h2 className=" text-2xl font-bold text-[#022B3A]"> Affordable Pricing:</h2>{" "}
                  <h1 className="text-lg mt-4 text-[#022B3A]">
                  We understand that every space is unique, and so are the cleaning needs. That&lsquo;s why we offer customized solutions tailored to fit your specific requirements.
                  </h1>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RiCustomerService2Fill className="text-8xl bg-[#1F7A8C] text-[#022B3A] rounded-full w-80 p-3" />
                  <div>
                  <h2 className=" text-2xl font-bold text-[#022B3A]">
                    {" "}
                    Customer Satisfaction:
                  </h2>{" "}
                  <h1 className="text-lg mt-4 text-[#022B3A]">
                    {" "}
                    Your satisfaction is our top priority. We go above and beyond to ensure that every corner is spotless and every surface gleams. Our friendly and reliable team is always ready to listen to your feedback and address any concerns promptly. 
                  </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
