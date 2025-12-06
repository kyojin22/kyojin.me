import { FC, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TbBrandGithub,
  TbBrandLeetcode,
  TbBrandLinkedin,
  TbFileCv,
} from "react-icons/tb";
import { RiCloseLine } from "react-icons/ri";
import { handleDownload } from "@/common/utils";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

interface SidebarInterface {
  sidebar: boolean;
  toggleSidebar: () => void;
}

const sidebarLinks = [
  {
    name: "Github",
    link: "https://github.com/kyojin22",
    icon: <TbBrandGithub className="icon" />,
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/u/kyojin22",
    icon: <TbBrandLeetcode className="icon" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/muhammadbobur-abdukarimov",
    icon: <TbBrandLinkedin className="icon" />,
  },
];

export const Sidebar: FC<SidebarInterface> = ({ sidebar, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(sidebarRef, toggleSidebar, sidebar);

  return (
    <aside
      ref={sidebarRef}
      className={`${
        sidebar ? "w-3/4 p-5" : "w-0"
      } h-full text-grey bg-white dark:bg-black absolute right-0 duration-500`}
    >
      {sidebar && (
        <>
          <div className="mb-10 flex items-center justify-between">
            <NavLink to="/">
              <h2 className="hover:text-black dark:hover:text-main text-lg">
                &lt;kyo/&gt;
              </h2>
            </NavLink>
            <button onClick={toggleSidebar}>
              <RiCloseLine className="text-4xl hover:text-black dark:hover:text-main" />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h6 className="text-xs text-grey">Social Links</h6>
              {sidebarLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="flex items-center gap-2 hover:text-black dark:hover:text-main"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h6 className="text-xs text-grey">More</h6>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 hover:text-black dark:hover:text-main"
              >
                <TbFileCv className="icon" />
                Download my CV
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};
