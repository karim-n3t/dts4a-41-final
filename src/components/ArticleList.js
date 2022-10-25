import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ArticleItem = (props) => {
  const { article } = props;
  return (
    <Col>
      <Card className="h-100 border-0">
        <Card.Img variant="top" className="rounded" src={article.urlToImage} />
        <Card.Body className="px-0">
          <Card.Title>{article.title}</Card.Title>
          <Card.Text className="col align-self-end text-end">
            {article.source.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const ArticleList = (props) => {
  return (
    <Row sm={2} md={3} lg={4} className="g-4">
      {props.articles.map((article, index) => (
        <ArticleItem article={article} key={article.title + index} />
      ))}
    </Row>
  );
};

export default ArticleList;
