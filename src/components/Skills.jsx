import React from "react";
import { CLang } from "./Models/Clang";
import { Csharp } from "./Models/Csharp";
import { Php } from "./Models/Php";
import { Python } from "./Models/Python";
import { ReactIcon } from "./Models/ReactIcon";

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
