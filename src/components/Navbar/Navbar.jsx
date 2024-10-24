"use client";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
const navItems = [
  { routeName: "Home", routePath: "/" },
  { routeName: "About", routePath: "/about" },
  { routeName: "Services", routePath: "/services" },
  { routeName: "Blog", routePath: "/blog" },
  { routeName: "Contact", routePath: "/contact" },
  { routeName: "Appointment", routePath: "/appointment", isLgHidden: true },
  // { routeName: "Login", routePath: "/login", isLgHidden: true },
];
const Navbar = () => {
  const session = useSession();
  // console.log(session);
  const user = session?.data?.user;
  // console.log(user);
  const currentPath = usePathname();
  const navLinks = navItems.map((item) => (
    <li key={item.routePath}>
      <Link
        href={item.routePath}
        className={`${item.routePath === currentPath && "text-primary"} ${
          item.isLgHidden && "block md:hidden"
        }`}
      >
        {item.routeName}
      </Link>
    </li>
  ));

  return (
    <nav className="container navbar max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-medium w-52">
            {navLinks}
          </ul>
        </div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo..."
            className="w-16 h-16 lg:w-24 lg:h-24"
          />
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="gap-5 px-1 text-lg font-medium menu-horizontal">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link
            href="/login"
            className="px-4 py-3 mr-3 font-medium text-white border-transparent rounded-md bg-primary md:block"
          >
            Login
          </Link>
        ) : (
          <div className="md:mr-4">
            <div
              tabIndex={0}
              role="button"
              className="avatar online placeholder dropdown dropdown-end"
            >
              <div className="w-12 rounded-full bg-neutral text-neutral-content lg:w-14">
                <span className="text-xl uppercase">
                  {user?.name?.split("")[0]}
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu space-y-2 lg:space-y-3 bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li
                  className={`text-xs lg:text-sm ${
                    user?.name?.length > 20 &&
                    "tooltip tooltip-left md:tooltip-bottom"
                  }`}
                  data-tip={user?.name.length > 20 && user?.name}
                >
                  {user?.name.slice(0, 20)}
                  {user.name.length > 20 && "..."}
                </li>
                {/* <li className="text-xs lg:text-sm">{user?.name}</li> */}
                <li
                  className={`text-xs lg:text-sm ${
                    user?.email?.length > 20 &&
                    "tooltip tooltip-left md:tooltip-bottom"
                  }`}
                  data-tip={user?.email.length > 20 && user?.email}
                >
                  {user?.email.slice(0, 20)}
                  {user.email.length > 20 && "..."}
                </li>
                <li className="transition-all duration-100 rounded-md hover:bg-black">
                  <button
                    onClick={() => signOut({ redirect: false })}
                    className="px-3 py-2 font-medium text-white border-transparent rounded-md md:px-4 md:py-3 bg-primary md:block"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        <Link href={"/appointment"} className="hidden md:block">
          <button className="btn-transparent btn-transparent-red">
            Appointment
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
