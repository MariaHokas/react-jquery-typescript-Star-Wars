import React from "react";

interface ButtonProps {
  setPage: (setPage: string) => void;
}

const Navbar: React.FC<ButtonProps> = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("chars")}>People</button>
    </nav>
  );
};

export default Navbar;
