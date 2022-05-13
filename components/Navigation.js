import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl md:flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white dark:hover:text-sky-500"
            }
          >
            Your Name
          </a>
        </Link>
        <div className="flex items-center">
          <Link className="" href="/teaching">
            <a className="hover:text-sky-500 px-2">Teaching</a>
          </Link>
          <Link className="" href="/research">
            <a className="hover:text-sky-500 px-2">Research</a>
          </Link>
          <Link className="" href="/contact">
            <a className="hover:text-sky-500 px-2">Contact</a>
          </Link>
          <ThemeSwitch className="sky-500" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
