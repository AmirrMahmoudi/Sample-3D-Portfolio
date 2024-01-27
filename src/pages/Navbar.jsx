import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const responsive = () => {
    setMobile(!mobile);
  };
  return (
    <div>
      <nav className="border-gray-300 bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://logowik.com/content/uploads/images/adobe-portfolio8664.jpg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              Portfolio
            </span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-200 md:hidden"
            onClick={responsive}
          >
            <span className="sr-only">منو</span>
            <CiMenuFries className="text-3xl" />
          </button>
          {mobile ? (
            <div className=" w-full md:block md:w-auto">
              <ul className="mt-4 flex flex-col gap-5 rounded-lg border-gray-200 bg-gray-500 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
                <li>
                  <a
                    href=""
                    className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-indigo-700"
                  >
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-indigo-700"
                  >
                    خانه
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-indigo-700"
                  >
                    درباره من
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden w-full md:block md:w-auto">
              <ul className="mt-4 flex flex-col gap-5 rounded-lg border-gray-200 bg-gray-50 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
                <li>
                  <a
                    href=""
                    className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-indigo-700"
                  >
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-indigo-700"
                  >
                    خانه
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-indigo-700"
                  >
                    درباره من
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
