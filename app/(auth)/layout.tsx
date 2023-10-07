import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-full bg-red-600">
      {children}
    </div>
  );
};

export default AuthLayout;
