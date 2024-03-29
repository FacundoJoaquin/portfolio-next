import ContentContainer from "../components/atoms/ContentContainer/ContentContainer";

const Presentation = ({ position }) => {
  return (
    <ContentContainer style={`${position}  h-full w-full grid grid-rows-1 grid-cols-2  gap-4`}>
      <p className="row-start-1 col-start-1 dark:text-black text-[1.8rem] md:text-[2.2rem] text-darkSurface-200 font-bold flex items-center justify-end 2xl:text-[2.6rem] ">
        FACUNDO
      </p>
      <p className="row-start-1 col-start-2 text-darkSurface-200 text-end dark:text-black text-[1.3rem] font-bold flex items-start justify-center flex-col 2xl:text-[1.4rem]">
        FULLSTACK <span className='underline-bordo'>DEVELOPER</span>
      </p>
    </ContentContainer >
  );
};

export default Presentation;
