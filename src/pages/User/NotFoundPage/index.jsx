import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./styles.scss";

function NotFoundPage() {
  return (
    <main className="notfound-page">
      <Row className="container-1">
        <Col span={12}>
          <div className="notfound-page__main">
            <p>Oops!</p>
            <p>Page not found!</p>
            <Link to="/" className="notfound-page__main--link">
              Go to Home page
            </Link>
          </div>
        </Col>
        <Col span={12}></Col>
      </Row>
    </main>
  );
}

export default NotFoundPage;
