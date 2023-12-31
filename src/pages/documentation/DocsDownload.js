import React from "react";
import { Row, Col, Card, Container } from "@themesberg/react-bootstrap";

export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <article>
              <h1 className="h2" id="download">
                Download{" "}
              </h1>
              <p className="fs-5 fw-light">
                Download files for Dinary React Dashboard
              </p>
              <p>
                Use the following links to download Dinary React Dashboard
                files:
              </p>
              <ul className="docs-list">
                <li>
                  Download{" "}
                  <Card.Link
                    href="https://themesberg.com/product/dashboard/Dinary-pro-react"
                    target="_blank"
                  >
                    Dinary React Dashboard
                  </Card.Link>
                  .
                </li>
              </ul>
            </article>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
