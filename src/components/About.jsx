import React from "react";
import { AboutModels } from "./Models/AboutModels";

function About() {
  return (
    <div dir="rtl">
      <div className="grid grid-rows-1 gap-5 lg:grid-cols-2">
        <div>
          <h3 className="m-5 text-center text-3xl font-bold text-white">
            درباره من بیشتر بدانید
          </h3>
          <p className="m-5 text-justify leading-10 text-red-100">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <a
            href="/about"
            className="mx-auto block w-32 rounded-lg bg-red-400 p-2 text-center text-white"
          >
            بیشتر بدانید
          </a>
        </div>
        <div>
          <AboutModels />
        </div>
      </div>
    </div>
  );
}

export default About;
