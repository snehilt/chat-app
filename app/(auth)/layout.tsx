import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center flex-col gap-8 justify-center h-full bg-gradient-to-tl from-black to-[#232428} w-full relative ">
      <img
        src="/people.jpg"
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-7xl text-gray-300 font-semibold">Convo.</h1>
        <p className="text-lg font-semibold text-zinc-500">
          Get in touch with everyone.
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
