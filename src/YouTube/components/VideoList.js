import "../../assets/App.css";
import "../../assets/VideoList.css";

import React from "react";
import { Card, CardColumns, Accordion } from "react-bootstrap";

export const VideoList = (props) => {
  // props.videos[0].snippet.title

  // const unescapetext = unescapeHtml( props.videos[0].snippet.title )
  // console.log("unescapetext",unescapetext)
  return (
    <CardColumns>
      {props.videos.map((video, index) => (
        <div key={video.id.videoId}>
          <Card className={`border-none ${index % 2 === 0 ? "" : "gray"}`}>
            <div variant="light">
              <Card.Img
                variant="top"
                src={video.snippet.thumbnails.high.url}
                onClick={() => props.handleShow(video)}
                className=""
              />
            </div>
            <a
              href={`https://youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="title">{video.snippet.title}</div>
            </a>
            <div className="accordion-card">
              <Accordion>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="accordion-btn"
                >
                  ▼
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="channelTitle">
                      {video.snippet.channelTitle}
                    </div>
                    <div className="description">
                      {video.snippet.description}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </div>
          </Card>
        </div>
      ))}
    </CardColumns>
  );
};
