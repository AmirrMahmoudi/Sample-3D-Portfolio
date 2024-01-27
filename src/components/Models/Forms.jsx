import React from "react";

function Forms() {
  return (
    <div>
      <div className="text-white">
        <h1 className="mb-5 mt-5 text-3xl font-bold">
          سلام امیرحسین محودی هستم{" "}
        </h1>
        <h3 className="mb-5 mt-10 text-center text-xl">front-end Developer</h3>
        <p className="text-justify text-sm leading-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        </p>
        <br />
        <span className="mb-3 mt-10 text-center text-lg">
          با من در تماس باشید
        </span>
        <br />
        <br />
      </div>
      <form>
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            className="mt-5 h-10 w-full rounded-lg border-2 border-red-200 outline-none"
            placeholder="نام و نام خانوادگی"
          />
          <input
            type="text"
            className="mt-5 h-10 w-full rounded-lg border-2 border-red-200 outline-none"
            placeholder="شماره تماس"
          />
          <input
            type="text"
            className="mt-5 h-10 w-full rounded-lg border-2 border-red-200 outline-none"
            placeholder="ایمیل"
          />
          <textarea
            cols={60}
            rows={10}
            className="mt-5 w-full rounded-lg border-2 border-red-200 outline-none"
            placeholder="پیغام شما"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Forms;
