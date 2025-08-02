
const CommonCard = ({title,description}) => {
  return (
    <div className="mb-10 md:mb-20 mr-20 w-[370px] lg:w-[550px] flex flex-col flex-wrap gap-8 shadow-lg p-5 animate-fade-right animate-delay-[1000ms] animate-ease-in-out animate-duration-[1000ms]">
      <h4 className="text-3xl md:text-4xl font-semibold">{title}</h4>
      <p className="text-xl text-justify text-gray-500">
       {description}
      </p>
    </div>
  );
};

export default CommonCard;
