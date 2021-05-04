import "../../assets/App.css";
import "../../assets/VideoList.css";


import React from "react";
import { Card , CardColumns } from "react-bootstrap";

export const VideoList = (props) => {
  // props.videos[0].snippet.title
  
  // const unescapetext = unescapeHtml( props.videos[0].snippet.title )
  // console.log("unescapetext",unescapetext)
  return (

        <CardColumns>
          {props.videos.map((video) => (
            <div key={video.id.videoId}>
              <Card className="border-none">
                <div variant="light">
                  <Card.Img
                    variant="top"
                    src={video.snippet.thumbnails.high.url}
                  />
                </div>
                <a href={`https://youtube.com/watch?v=${video.id.videoId}`}><div className="title">{video.snippet.title}</div></a>
                <div className="channelTitle">{video.snippet.channelTitle}</div>
                <div className="description">{video.snippet.description}</div>
              </Card>
            </div>
          ))}
        </CardColumns>
  );

};