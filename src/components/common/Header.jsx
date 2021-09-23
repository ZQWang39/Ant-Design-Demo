import React, { useState } from "react";
import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;
const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://www.google.com">Tech</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={46}>
            <Link href="#hero" title="HOME" />
            <Link href="#about" title="ABOUT US" />
            <Link href="#feature" title="FEATURES" />
            <Link href="#works" title="HOW IT WORKS" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="PLANS" />
            <Link href="#contact" title="CONTACT US" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            title="menu"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset={46}>
              <Link href="#hero" title="HOME" />
              <Link href="#about" title="ABOUT US" />
              <Link href="#feature" title="FEATURES" />
              <Link href="#works" title="HOW IT WORKS" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="PLANS" />
              <Link href="#contact" title="CONTACT US" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
