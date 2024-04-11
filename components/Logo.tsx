import Link from "next/link";
import React from "react";

//done

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      XformD
    </Link>
  );
}

export default Logo;
