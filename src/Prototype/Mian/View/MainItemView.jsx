import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import MainItemModelView from "./MainItemModelView";

const MainItemView = ({ imageUrl }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = React.useState("");

  const onSelected = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setOpen(true);
  };

  const onModal = (trigger) => {
    setOpen(trigger);
  };

  return (
    <div>
      <MainItemModelView
        imageUrl={selectedImageUrl}
        open={open}
        onModal={onModal}
      />
      <Card
        style={{ width: "100%", marginTop: "1em" }}
        onClick={() => onSelected(imageUrl)}
        raised
      >
        <Image src={imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          10 Friends
        </Card.Content>
      </Card>
    </div>
  );
};

export default MainItemView;
