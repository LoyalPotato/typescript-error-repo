import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Foo base="aga" />
    </div>
  );
}

type FooProps = {
  base: string;
} & (
  | {
      cb: (n: number) => void;
      flag: true;
    }
  | {
      cb: (n: [number]) => void;
      flag: false;
    }
);

const Foo: React.FC<FooProps> = ({ cb, flag }) => {
  const on = (n: number | [number]) => {
    if (flag && Array.isArray(n)) {
      cb(n);
    } else if (!flag && !Array.isArray(n)) {
      cb(n);
    }
  };
  return null;
};
