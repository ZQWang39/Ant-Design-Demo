import React, { useState } from "react";
import { Button, Modal } from "antd";
const Works = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>
            Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
          </p>
        </div>
        <div className="contentHolder">
          <Button size="large" onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <iframe
              title="Rupaul's Drag Race-Bianca Del rio"
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/z2qsvJu6Mf8"
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Works;
