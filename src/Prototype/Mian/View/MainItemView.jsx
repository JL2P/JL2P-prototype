import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import MainItemModelView from "./MainItemModelView";

const MainItemView = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = React.useState("");

  console.log(item);

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
        onClick={() => onSelected(item.imgUrl)}
        raised
      >
        <Image src={item.imgUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.title}</Card.Header>
          <Card.Meta>{item.start_time}</Card.Meta>
          <Card.Description>{item.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {item.name}
        </Card.Content>
      </Card>
    </div>
  );
};

export default MainItemView;
