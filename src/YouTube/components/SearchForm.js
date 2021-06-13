import "../../assets/App.css";
import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

export const SearchForm = (props) => {
  const notify = () => toast(`Searched for "${props.text}"`);

  return (

    <div className="form-block w-1/2 my-4">
    <Form onSubmit={props.onSubmit}>
        <Form.Control
        size="sm"
        type="text"
        onChange={(e) => props.setText(e.target.value)}
        value={props.text}
        placeholder="検索"
        />
        <Button type="submit" className="my-2" size="sm" onClick={notify}>
        Search
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </Form>
    </div>

  )

};
