/* eslint-disable react/prop-types */
import { Button, Card, Col } from "react-bootstrap";
import { PropTypes } from "prop-types";
import "./Product.css"

export function Product_Card(props) {
  const { product } = props


  return (
    <Col lg={4} md={6}>
      <Card className="product__card mb-4">
        <Card.Img className="product__img" variant="top" src={product.thumbnail} />
          <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description.slice(0, 40)}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
    </Col>
  )
}

Product_Card.protoType = {
  product: PropTypes.object
}