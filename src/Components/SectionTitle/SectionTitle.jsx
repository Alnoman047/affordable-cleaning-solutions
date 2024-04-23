const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className="md:w-4/12 mx-auto text-center my-8">
        <p className="text-[#1F7A8C] mb-2">---{subHeading}---</p>
        <h3 className="text-6xl uppercase font-bold py-4 text-[#022B3A] ">{heading}</h3>
      </div>
    );
  };
  
  export default SectionTitle;