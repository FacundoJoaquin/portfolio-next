import { BiLogoPostgresql } from "react-icons/bi";
import {
	DiCss3,
	DiDocker,
	DiGit,
	DiHtml5,
	DiLaravel,
	DiReact,
	DiSass,
} from "react-icons/di";
import {
	SiCss3,
	SiDocker,
	SiLaravel,
	SiSvelte,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import ContentContainer from "../components/atoms/ContentContainer/ContentContainer";
import ContentTitle from "../components/atoms/ContentTitle/ContentTitle";
import Laravel from "../components/icons/Laravel";
import style from "./skills.module.css";
import Image from "next/image";
import pythonLogo from "../../../../public/python.svg";
import { AnimatedTooltip } from "../components/atoms/AnimatedTooltip/AnimatedTooltip";
import { Tooltip } from "../components/atoms/Tooltip/Tooltip";

const technologies = [
	{ name: "Svelte", icon: <SiSvelte className="size-16 text-[#FF3E00]" />, position: "col-start-3 row-start-3", svgStyle: "" },
	{ name: "Sass", icon: <DiSass className="size-16 text-[#CF6C9C]" />, position: " col-start-1 row-start-3 border-l-0", svgStyle: "" },
	{ name: "Postgresql", icon: <BiLogoPostgresql className="size-16 text-[#336791]" />, position: "col-start-5 row-start-3", svgStyle: "" },
	{ name: "Python", icon: <Image src={pythonLogo} className="size-16" alt="Logo de Python" />, position: "col-start-7 row-start-5 border-r-0", svgStyle: "" },
	{ name: "Docker", icon: <SiDocker className="size-16 text-[#0091E2]" />, position: "col-start-1 row-start-5 row-span-1 border-l-0", svgStyle: "" },
	{ name: "React", icon: <DiReact className="h-20 w-20 text-[#5ED4F3] stroke-[0.2]" />, position: "col-start-3 row-start-5", svgStyle: "" },
	{ name: "Laravel", icon: <SiLaravel className="size-16 text-[#E8503E] stroke-[0.3]" />, position: "col-start-5 row-start-5 row-span-1", svgStyle: "" },
	{ name: "Tailwind", icon: <SiTailwindcss className="size-16 text-[#36B6F2]" />, position: "col-start-3 row-start-7", svgStyle: "" },
	{ name: "Typescript", icon: <SiTypescript className="size-16 text-[#3178c6]" />, position: "col-start-5 row-start-7 row-span-1", svgStyle: "" },
	{ name: "HTML", icon: <DiHtml5 className="size-20 text-[#E4552D]" />, position: "col-start-7 row-start-3 border-r-0", svgStyle: "" },
	{ name: "CSS", icon: <SiCss3 className="size-16 text-[#1F78C3]" />, position: "col-start-1 row-start-7 row-span-1 border-l-0", svgStyle: "" },
	{ name: "Git", icon: <DiGit className="size-20 text-[#F15536]" />, position: "col-start-7 row-start-7 row-span-1 border-r-0", svgStyle: "" },
];

const emptyGrid = [
	{ class:"col-start-1 row-start-1 border border-t-0 border-neutral-300 border-l-0 "  },
	{ class:"col-start-5 row-start-1 border border-t-0 border-neutral-300 "   },
	{ class:"col-start-7 row-start-1 border border-t-0 border-neutral-300 border-r-0"  },
	{ class:"col-start-3 row-start-1 border border-t-0 border-neutral-300"   },
	{ class:"col-start-1 row-start-9 border-b-0 row-span-1 border border-neutral-300 border-l-0 "  },
	{ class:"col-start-5 row-start-9 border-b-0 row-span-1 border border-neutral-300 "  },
	{ class:"col-start-3 row-start-9 border-b-0 row-span-1 border border-neutral-300 "  },
	{ class:"col-start-7 row-start-9 border-b-0 row-span-1 border border-neutral-300 border-r-0 "  },

]

const Skills = ({ position }) => {
	console.log('asd')
	return (
		<ContentContainer style={`${position} overflow-hidden `}>
			<ContentTitle classname="px-6 py-4">Tecnologías</ContentTitle>
			<div className="flex justify-center items-center flex-col">
				<div
					className={`${style.grid}  flex justify-center hover:rounded-md hover:w-full duration-300 `}
				>
					{emptyGrid.map((e, index) => {
						return (
							<div key={index} className={e.class}/>
						)
					})}
					{technologies.map((stack, index) => {
						return (
							<div key={index} className={`${stack.position} border border-neutral-300 grid place-items-center hover:bg-[#e4e3e3] hover:duration-150 `}>
								{stack.icon}
							</div>

						)
					})}

				</div>
			</div>
		</ContentContainer>
	);
};

export default Skills;
