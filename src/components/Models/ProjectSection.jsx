import { useState, useEffect } from "react";
import axios from "axios";
import Data from "../Data.json";
const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(Data);
        setProjects(res.config.url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div
      className="m-5 flex flex-wrap items-center justify-center gap-5"
      dir="rtl"
    >
      {projects.map((e, i) => {
        return (
          <div
            className="relative mb-5 mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            key={i}
          >
            <div className="reltaive mx-4 -mt-6  h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
              <img src={e.mainImg} alt="" />
            </div>

            <div className="p-6">
              <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-950">
                {e.title}
              </h5>
              <p className="block text-base font-light leading-relaxed text-inherit">
                {e.properties}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button className="rounded-lg p-3 text-center shadow-lg outline-dashed">
                ادامه
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProjectSection;
