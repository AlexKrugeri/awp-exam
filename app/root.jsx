import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/tailwind.css";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { ImUser } from "@react-icons/all-files/im/ImUser";
import { HiLogout } from "@react-icons/all-files/hi/HiLogout";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function meta() {
  return {
    charset: "utf-8",
    title: "Interno",
    viewport: "width=device-width,initial-scale=1",
  };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="pb-28 lg:pb-0 lg:flex">
        <nav className="w-56 min-w-56 mr-5 h-screen">
          <div className="overflow-y-auto py-4 px-3 bg-custom-darkBlue h-full">
            <Link to="/">
              <img
                className="w-20 mx-auto mt-5 mb-10 transform transition duration-500 hover:scale-125"
                src="/images/portal.png"
              />
            </Link>

            <ul className="space-y-2">
              <li className="">
                <Link
                  to="/"
                  className="flex items-center pl-6 p-2 text-base font-normal text-white rounded-lg hover:bg-custom-hoverBlue"
                >
                  <MdDashboard className="w-6 h-6" />
                  <span className="ml-3 text-xl ">Feed</span>
                </Link>
              </li>
            </ul>

            <ul className="space-y-2">
              <li className="">
                <Link
                  to="/"
                  className="flex items-center pl-6 p-2 text-base font-normal text-white rounded-lg hover:bg-custom-hoverBlue"
                >
                  <AiFillHeart className="w-6 h-6" />
                  <span className="ml-3 text-xl ">Favorites</span>
                </Link>
              </li>
            </ul>

            <ul className="space-y-2">
              <li className="">
                <Link
                  to="/profile"
                  className="flex items-center pl-6 p-2 text-base font-normal text-white rounded-lg hover:bg-custom-hoverBlue"
                >
                  <ImUser className="w-6 h-6" />
                  <span className="ml-3 text-xl ">My Profile</span>
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="">
                <Link
                  to="/logout"
                  className="flex items-center pl-6 p-2 text-base font-normal text-white rounded-lg hover:bg-custom-hoverBlue"
                >
                  <HiLogout className="w-6 h-6" />
                  <span className="ml-3 text-xl ">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <nain>
          <Outlet />
        </nain>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
