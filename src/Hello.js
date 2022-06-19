import { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
