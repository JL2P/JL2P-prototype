import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

const MainItemView = () => {
  return (
    <Card style={{ width: "100%" }}>
      <Image
        src={`/posts/test_img_${getRandomIntInclusive(1, 100)}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Daniel</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  );
};

export default MainItemView;
