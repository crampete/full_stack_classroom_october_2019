import React from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/profile");
  };

  render() {
    return (
      // It's totally possbile to use Bootstrap classes like you do with normal HTML
      // You can also use bootstrap classes
      <div className="mt-5 offset-md-3 offset-lg-4 col-md-6 col-lg-4">
        <Form className="pr-2 pl-2" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(SignIn);
