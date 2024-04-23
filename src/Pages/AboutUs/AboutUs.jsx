import serviceImg from "../../assets/27.png";
import Cover from "../Shared/Cover/Cover";
import valueimg from "../../assets/4.png"
import missionImg1 from "../../assets/10.png"
import missionImg2 from "../../assets/12.png"
import missionImg3 from "../../assets/13.png"

const AboutUs = () => {
  return (
    <div className="text-[#022B3A]">
      {/* banner start */}
      <Cover img={serviceImg} title="About Us"></Cover>
      {/* banner end */}

      {/* company story section starts here */}
      <div className="mt-48">
        <div>
          <section className="dark:bg-gray-100 text-[#022B3A] dark:text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
                  Our Company Story
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
                  Discover our company&apos;s dedication to affordable cleaning
                  solutions, offering
                  <br />
                  reliable products and expert advice for a spotless home every
                  time.
                </p>
              </div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                  Our Mission
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-600">
                  Our mission is to ensure that everyone has access to effective cleaning solutions that fit within their budget, promoting cleanliness and hygiene in homes and businesses alike.
                  </p>
                  <div className="mt-8 space-y-8">
                    <div className="flex">
                      <div className="flex-shrink-0 ">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7] ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Quality Assurance
                        </h4>
                        <p className="mt-2 dark:text-gray-600">
                        We guarantee top-tier effectiveness without compromise on affordability, ensuring our products meet stringent quality standards.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Financial Accessibility
                        </h4>
                        <p className="mt-2 dark:text-gray-600">
                        With competitive pricing and ongoing discounts, we are dedicated to making sure everyone can afford the cleanliness they deserve.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Eco-Conscious Approach
                        </h4>
                        <p className="mt-2 dark:text-gray-600">
                        Our commitment extends to the planet, with sustainable practices ingrained in every aspect of our business, from sourcing to packaging.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <img
                    src={missionImg1}
                    alt=""
                    className="mx-auto rounded-lg w-[22.625rem] h-[30.188rem] shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
              <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div className="lg:col-start-2">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                    About Affordable Cleaning Solutions
                    </h3>
                    <p className="mt-3 text-lg dark:text-gray-600">
                    Your Cleanliness Partner
                    </p>
                    <div className="mt-12 space-y-8">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-7 h-7"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          Excellence Guaranteed
                          </h4>
                          <p className="mt-2 dark:text-gray-600">
                          Quality is non-negotiable for us, from products to service. Expect nothing less than excellence.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-7 h-7"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          Customer-Focused Service
                          </h4>
                          <p className="mt-2 dark:text-gray-600">
                          Your needs guide us. We are here to listen and customize our solutions to fit your requirements perfectly.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-7 h-7"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          Community & Eco-Care
                          </h4>
                          <p className="mt-2 dark:text-gray-600">
                          We are not just about cleaning; we are about giving back and protecting the environment. Join us in making a difference.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                    <img
                      src={missionImg2}
                      alt=""
                      className="mx-auto rounded-lg w-[22.625rem] h-[30.188rem] shadow-lg dark:bg-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                  Benefits of Choosing Affordable Cleaning Solutions
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-600">
                  Experience the advantages of partnering with us for your cleaning needs
                  </p>
                  <div className="mt-8 space-y-8">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Cost-Efficiency
                        </h4>
                        <p className="mt-2 dark:text-gray-600">
                        Save money without compromising on quality. Our affordable pricing ensures that you get effective cleaning solutions at prices that wont break the bank.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Time Savings
                        </h4>
                        <p className="mt-2 dark:text-gray-600">
                        Streamline your cleaning routine with our efficient products and services. Spend less time scrubbing and more time enjoying a clean and fresh space.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#BFDBF7]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Health and Safety Assurance
                        </h4>
                        <p className="mt-2 dark:text-gray-600">
                        Our products are designed to effectively eliminate germs and bacteria, promoting a healthier environment for all.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <img
                    src={missionImg3}
                    alt=""
                    className="mx-auto rounded-lg w-[22.625rem] h-[30.188rem] shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* company story section ends here */}

      {/* Value section starts here */}
<section className="mt-44">
	<div className="bg-[#BFDBF7] w-5/6 mx-auto rounded-lg">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-[#022B3A]">Maximize Your Cleanliness, Minimize Your Costs: Our Value Proposition</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-[#022B3A]">Our value section is where affordability meets quality. Discover how we deliver exceptional cleaning services without breaking the bank. Learn about our commitment to providing the best value for our customers, ensuring your satisfaction every step of the way</p>
			
		</div>
	</div>
	<img src={valueimg} alt="" className="w-4/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>

{/* value section ends here */}

      {/* FAQ */}
      <section className="dark:bg-gray-100 mt-44 mb-24">
	<div className="container flex flex-col justify-center w-2/3 px-4  mx-auto py-8  md:p-8">
		<h2 className="text-2xl text-center font-semibold sm:text-4xl text-[#022B3A]">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 text-center text-[#022B3A]">Quick answers to commonly asked questions about our services</p>
		<div className="space-y-4">
			<details className="w-full border border-[#022B3A] rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 text-[#022B3A]">What types of cleaning services do you offer?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-[#022B3A]">We offer a wide range of cleaning services to suit your needs, including residential cleaning, commercial cleaning, move-in/move-out cleaning, deep cleaning, and more. Whether you need a one-time cleaning or regular maintenance, we have got you covered.</p>
			</details>
			<details className="w-full border border-[#022B3A] rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 text-[#022B3A]">How do you ensure affordability without compromising on quality?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-[#022B3A]">At Affordable Cleaning Solutions, we believe that everyone deserves a clean and healthy environment without breaking the bank. We achieve affordability through efficient processes, trained staff, and strategic sourcing of cleaning supplies. By optimizing our operations, we are able to offer competitive prices while maintaining the highest standards of cleanliness and professionalism.</p>
			</details>
			<details className="w-full border border-[#022B3A] rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 text-[#022B3A]">Are your cleaning products safe for pets and children?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 text-[#022B3A]">Yes, absolutely. We understand the importance of using safe and eco-friendly cleaning products, especially in households with pets and children. Thats why we prioritize the use of non-toxic, biodegradable cleaning solutions that are gentle yet effective. Rest assured that your family, including your furry friends, will be safe and healthy after our cleaning sessions. If you have specific concerns or preferences regarding cleaning products, please let us know, and we will be happy to accommodate your needs.</p>
			</details>
		</div>
	</div>
</section>

{/* FAQ END */}



    </div>
  );
};

export default AboutUs;
