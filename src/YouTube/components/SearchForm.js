import "../../assets/App.css";

import React from "react";
import { Button, Form } from "react-bootstrap";

export const SearchForm = (props) => {
  return (

    <div className="form-block w-1/2 my-4">
    <Form onSubmit={props.onSubmit}>
        <Form.Control
        size="lg"
        type="text"
        onChange={(e) => props.setText(e.target.value)}
        value={props.text}
        placeholder="Search text"
        />
        <Button type="submit" className="my-2">
        Search
        </Button>
    </Form>
    </div>

  )

};
