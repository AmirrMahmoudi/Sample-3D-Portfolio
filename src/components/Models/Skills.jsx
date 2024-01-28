import React from "react";
import { CLang } from "./Clang";
import { Csharp } from "./Csharp";
import { Php } from "./Php";
import { Python } from "./Python";
import { ReactIcon } from "./ReactIcon";

function Skills() {
  return (
    <div>
      <br />
      <h3 className="text-center text-3xl font-bold text-indigo-100">
        مهارت های من
      </h3>

      <br />
      <div className="grid grid-rows-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <CLang />
        </div>
        <div>
          <Csharp />
        </div>
        <div>
          <Php />
        </div>
        <div>
          <Python />
        </div>
        <div>
          <ReactIcon />
        </div>
      </div>
    </div>
  );
}

export default Skills;
