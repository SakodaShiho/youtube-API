import "../../assets/App.css";

import React, { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import { VideoList } from "../components/VideoList";
import { VideoModal } from "../components/VideoModal";
import _ from "lodash";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_SERACH_API_URI = "https://www.googleapis.com/youtube/v3/search?";

export const YoutubeList = () => {
  const [videos, setVideos] = useState([]);
  //検索フォームの文字列
  const [text, setText] = useState("");
  //今なんの検索文字列で検索しているか
  const [query, setQuery] = useState("twice");
  // const [modalShow, setModalShow] = useState(false);
  // const [clickedImage, setClickedImage] = useState(undefined);

  const [clickedVideo, setClickedVideo] = useState(undefined);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const params = {
      key: YOUTUBE_API_KEY,
      q: query, // 検索キーワード
      type: "video", // video,channel,playlistから選択できる
      maxResults: "6", // 結果の最大数
      order: "viewCount", // 結果の並び順を再生回数の多い順に
      part: "snippet",
    };
    const queryParams = new URLSearchParams(params);

    fetch(YOUTUBE_SERACH_API_URI + queryParams)
      .then((response) => response.json())
      .then((data) => {
        setVideos(
          data.items.map((item) => {
            item.snippet.title = _.unescape(item.snippet.title);
            return item;
          })
        );
      });
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
  };

  const handleClose = () => setShow(false);
  const handleShow = (video) => {
    // setShow(false);

    setClickedVideo(video);
    setShow(true);
  };

  return (
    <div className="text-center">
      <div className="container flex flex-col items-center">
        <SearchForm onSubmit={onSubmit} setText={setText} text={text} />

        <VideoList videos={videos} handleShow={handleShow} />
        {clickedVideo ? (
          <VideoModal
            show={show}
            handleClose={handleClose}
            clickedVideo={clickedVideo}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
