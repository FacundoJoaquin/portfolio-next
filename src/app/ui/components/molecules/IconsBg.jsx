'use client'

import React, { useEffect } from "react";
import { DiCss3, DiGit, DiHtml5, DiJavascript, DiReact, DiPostgresql } from "react-icons/di";
import {
  BiLogoFirebase,
  BiLogoSass,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoDocker,
  BiLogoPostgresql
} from "react-icons/bi";
import { RiOpenaiFill } from "react-icons/ri";
import { SiLaravel, SiSvelte } from "react-icons/si";
import Svelte from "../icons/Svelte";
import { useAppContext } from "../../../context";

export default function IconParticles() {
  const { ui, setUi } = useAppContext(); 

  useEffect(() => {
    console.log('ui desde icon', ui)
  },[ui])
  return (
    <div className="particles-icons opacity-40">
      <BiLogoTypescript className={`${ui.dark ? 'text-[#2F74C0] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <DiReact className={`${ui.dark ? 'text-[#5ED4F3] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <DiHtml5 className={`${ui.dark ? 'text-[#E4552D] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <BiLogoPostgresql className={`${ui.dark ? 'text-[#336791] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <BiLogoFirebase className={`${ui.dark ? 'text-[#F7A010] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <DiCss3 className={`${ui.dark ? 'text-[#1F78C3] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <DiJavascript className={`${ui.dark ? 'text-[#F7E025] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <BiLogoTailwindCss className={`${ui.dark ? 'text-[#36B6F2] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <BiLogoDocker className={`${ui.dark ? 'text-[#0091E2] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <BiLogoSass className={`${ui.dark ? 'text-[#CF6C9C] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <SiSvelte className={`${ui.dark ? 'text-[#FF3E00] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <BiLogoRedux className={`${ui.dark ? 'text-[#7A50BE] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <DiGit className={`${ui.dark ? 'text-[#F15536] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <BiLogoPostgresql className={`${ui.dark ? 'text-[#336791] ' : ''} particle-icon transition-colors  ease-in-out`} />
      <SiLaravel className={`${ui.dark ? 'text-[#E8503E] ' : ''} particle-icon transition-colors  ease-in-out`} />
    </div>
  );
}
