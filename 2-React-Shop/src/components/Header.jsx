import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <header className="flex justify-between py-4">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <div className="relative flex items-center px-3 py-1 border border-black">
          <p>My Cart</p>
          <span className="absolute right-0 translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
            1
          </span>
        </div>
      </header>
    </Container>
  );
};

export default Header;
