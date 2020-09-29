import React from "react";
import { Modal, Image, Button } from "semantic-ui-react";

const MainItemModelView = ({ imageUrl, open, onModal }) => {
  return (
    <Modal
      onClose={() => onModal(false)}
      onOpen={() => onModal(true)}
      open={open}
    >
      <Modal.Header>Todo Title</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={imageUrl} wrapped />
        <Modal.Description>
          <p>Todo Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam{" "}
          </p>
          <p>
            nemo sunt accusamus nisi dolore doloremque! Nostrum quas veniam sint{" "}
          </p>
          <p>
            numquam, recusandae alias modi facilis vel? Hic quae quod maxime!
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => onModal(false)}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default MainItemModelView;
