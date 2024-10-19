"use client";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const user = false;
  //   const handleLogout = () => {
  //     swal({
  //       title: "Are you sure?",
  //       text: "You want to logout your account!",
  //       icon: "warning",
  //       buttons: true,
  //       dangerMode: true,
  //     }).then((willDelete) => {
  //       if (willDelete) {
  //         userLogOut()
  //           .then((result) => {
  //             swal("Good job!", "Logout Successful!", "success");
  //           })
  //           .catch((error) => {
  //             swal(error.message);
  //           });
  //         // swal("Poof! Your imaginary file has been deleted!", {
  //         //   icon: "success",
  //         // });
  //       } else {
  //         swal("Logout has been Canceled!");
  //       }
  //     });

  //     // userLogOut()
  //     //   .then((result) => {
  //     //     swal("Good job!", "Logout Successful!", "success");
  //     //   })
  //     //   .catch((error) => {
  //     //     swal(error.message);
  //     //   });
  //   };
  const navItems = [
    { routeName: "Home", routePath: "/" },
    { routeName: "About", routePath: "/about" },
    { routeName: "Services", routePath: "/services" },
    { routeName: "Blog", routePath: "/blog" },
    { routeName: "Contact", routePath: "/contact" },
    { routeName: "Login", routePath: "/login" },
  ];
  const currentPath = usePathname();
  const navLinks = navItems.map((item) => (
    <li key={item.routePath}>
      <Link
        href={item.routePath}
        className={`${item.routePath === currentPath && "text-primary"}`}
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
        {/* <a className="btn">Button</a> */}
        <Link href={"/appointment"}>
          {/* <button className="bg-transparent px-7 border-primary btn btn-outline text-primary hover:bg-transparent hover:text-primary hover:border-primary">
            Appointment
          </button> */}
          <button className="btn-transparent btn-transparent-red">
            Appointment
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
