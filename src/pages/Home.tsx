import {
  TbCode,
  TbDeviceGamepad2,
} from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import { SiArchlinux } from "react-icons/si";

export default function HomePage() {
  return (
    <main className="container px-5 md:px-0 my-10 xl:my-20 w-full text-black dark:text-white">
      <div className="mb-5 xl:mb-10 flex flex-col">
        <h1 className="text-2xl xl:text-3xl">Hello! I am Muhammadbobur</h1>
        <span className="text-grey text-xs xl:text-sm flex items-center flex-wrap gap-1">
          <TbCode />
          <span title="i suck at it">Software Engineer*&nbsp; | &nbsp;</span>
          <FaUserGraduate />
          <span title="i hate it">WIUT Student&nbsp; | &nbsp;</span>
          <SiArchlinux />
          <span title="ai helped with my setup">I use Arch btw&nbsp; | &nbsp;</span>
          <TbDeviceGamepad2 />
          <span title="free fire #1982783322">Gamer</span>
        </span>
      </div>

      <div className="text-justify flex flex-col gap-4 xl:gap-8">
        <p>Random weird guy, who counts himself as software engineer</p>

        <p>I know vue2 and use it at my <span title="iyb">work</span>. I guess I know JavaScript</p>

        <p>I have got tons of bullshit unfinshed projects in my github</p>

        <p>I like playing free fire and binge watching</p>

        <p>still tryin to discover who in the world i am</p>
      </div>
    </main>
  );
}
