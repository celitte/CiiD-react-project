import React, { useEffect, useState } from "react";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1 className="layout__title">{props.title}</h1>
      </header>
      <main className="layout__content">{props.children}</main>
      <footer className="layout__footer">ToDo App Example</footer>
    </div>
  );
};

export default Layout;
