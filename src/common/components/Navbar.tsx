import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TbBrandGithub,
  TbBrandLeetcode,
  TbBrandLinkedin,
  TbFileCv,
  TbSun,
  TbMoonStars,
  TbMenuDeep,
} from "react-icons/tb";
import { useTheme } from "@/common/providers/ThemeProvider";
import { handleDownload } from "@/common/utils";

interface NavbarInterface {
  toggleSidebar: () => void;
}

const socialLinks = [
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

export const Navbar: FC<NavbarInterface> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="container px-5 md:px-0 py-5 w-full flex items-center justify-between text-grey">
      <NavLink to="/">
        <h2 className="hover:text-black dark:hover:text-main text-lg md:text-xl">
          &lt;kyo/&gt;
        </h2>
      </NavLink>

      <div className="flex items-center gap-5">
        {socialLinks.map((link, index) => (
          <Link key={index} to={link.link} className="hidden md:inline-block">
            {link.icon}
          </Link>
        ))}

        <button onClick={handleDownload} className="hidden md:inline-block">
          <TbFileCv className="icon" />
        </button>

        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <TbSun className="icon" />
          ) : (
            <TbMoonStars className="icon" />
          )}
        </button>

        <button onClick={toggleSidebar} className="md:hidden">
          <TbMenuDeep className="icon" />
        </button>
      </div>
    </nav>
  );
};
