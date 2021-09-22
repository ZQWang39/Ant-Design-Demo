import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;
const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://www.google.com">Tech</a>
        </div>
        <Anchor targetOffset={46}>
          <Link href="#hero" title="HOME" />
          <Link href="#about" title="ABOUT US" />
          <Link href="#feature" title="FEATURES" />
          <Link href="#works" title="HOW IT WORKS" />
          <Link href="#faq" title="FAQ" />
          <Link href="#pricing" title="PLANS" />
          <Link href="#conact" title="CONTACT US" />
        </Anchor>
      </div>
    </div>
  );
};

export default AppHeader;
