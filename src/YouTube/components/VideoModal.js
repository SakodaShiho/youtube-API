import "../../assets/App.css";
import "../../assets/VideoModal.css";
import Iframe from "react-iframe";

import React from "react";
import { Button, Modal } from "react-bootstrap";

export const VideoModal = (props) => {
  console.log("clickedVideo", props.clickedVideo);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="title">{props.clickedVideo.snippet.title}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Iframe
            src={`https://www.youtube.com/embed/${props.clickedVideo.id.videoId}`}
          ></Iframe>
          <div className="modal-channelTitle">
            {props.clickedVideo.snippet.channelTitle}
          </div>
          <div className="modal-description">
            {props.clickedVideo.snippet.description}
          </div>
          <div className="youtube_link">
            <a
              href={`https://youtube.com/watch?v=${props.clickedVideo.id.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              ▶︎ YouTube
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
