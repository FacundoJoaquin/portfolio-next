'use client'

import React from "react";
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
import { SiLaravel } from "react-icons/si";
import Svelte from "../icons/Svelte";

export default function IconParticles() {
  return (
    <div className="particles-icons opacity-40">
      <BiLogoTypescript className="particle-icon" />
      <DiReact className="particle-icon" />
      <DiHtml5 className="particle-icon" />
      <BiLogoPostgresql className="particle-icon" />
      <BiLogoFirebase className="particle-icon" />
      <DiCss3 className="particle-icon" />
      <DiJavascript className="particle-icon" />
      <BiLogoTailwindCss className="particle-icon" />
      <BiLogoDocker className="particle-icon " />
      <BiLogoSass className="particle-icon" />
      <Svelte className="particle-icon"/>
      <BiLogoRedux className="particle-icon" />
      <DiGit className="particle-icon" />
      <BiLogoPostgresql className="particle-icon" />
      <SiLaravel className="particle-icon" />
    </div>
  );
}
