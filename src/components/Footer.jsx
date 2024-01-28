import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-500">
      <footer className="m-4 rounded-lg" dir="rtl">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="items-centermb-4 flex space-x-3 sm:mb-0 rtl:space-x-reverse"
            >
              <img
                src="https://logowik.com/content/uploads/images/adobe-portfolio8664.jpg"
                className="h-8"
                alt=""
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold">
                Portfolio
              </span>
            </a>
            <ul className=" mb-6 flex flex-wrap items-center text-sm font-medium text-gray-200">
              <li>
                <a href="" className="me-4 hover:underline md:me-6">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="" className="me-4 hover:underline md:me-6">
                  خانه
                </a>
              </li>
              <li>
                <a href="" className="me-4 hover:underline md:me-6">
                  درباره من
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="text-white">طراحی و توسعه امیرحسین محمودی</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
