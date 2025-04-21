
import AboutMe from "./AboutMe";
import GithubStats from "./GithubStats";
import AvailableForHire from "./AvailableForHire";
import RevealWrapper from "../RevealWrapper";
import ConnectWithMe from "./ConnectWithMe";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import MyProjects from "./MyProjects";
import EOF from "./EOF";

export default function Hero() {
  return (
    <div className="md:w-[50%] p-5 w-full flex flex-col gap-2 my-5">
      <RevealWrapper>
        <AboutMe/>
      </RevealWrapper>
      <RevealWrapper>
        <AvailableForHire/>
      </RevealWrapper>
      <RevealWrapper>
        <GithubStats/>
      </RevealWrapper>
      <RevealWrapper>
        <Skills />
      </RevealWrapper>
      <RevealWrapper>
        <ConnectWithMe/>
      </RevealWrapper>
        <Work/>
      <RevealWrapper>
        <Education/>
      </RevealWrapper>
      <RevealWrapper>
        <MyProjects/>
      </RevealWrapper>
      <RevealWrapper>
        <EOF/>
      </RevealWrapper>
    </div>
  );
}