import ContentContainer from "../components/atoms/ContentContainer/ContentContainer";

const Presentation = ({ position }) => {
  return (
    <ContentContainer style={`${position} h-full w-full grid grid-rows-1 grid-cols-2  gap-1`}>
      <p className="row-start-1 col-start-1 text-black text-[2.2rem] dark:text-darkSurface-200 font-bold flex items-center justify-end 2xl:text-[3.2rem] ">
        FACUNDO
      </p>
      <p className="row-start-1 col-start-2 dark:text-darkSurface-200 text-end text-black text-[1.3rem] font-bold flex items-start justify-center flex-col 2xl:text-[1.7rem]">
        FULLSTACK <span className='underline-bordo'>DEVELOPER</span>
      </p>
    </ContentContainer >
  );
};

export default Presentation;
