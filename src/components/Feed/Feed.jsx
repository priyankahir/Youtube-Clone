import React from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { api_key, value_conveter } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment/moment";

function Feed({ category }) {
  // here data are passed by home-->sidebar(in side bar in category variable store the category ---> ans its passed by in feed card)

  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const videolisturl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&maxResults=50&key=${api_key}`;

    await fetch(videolisturl)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  //React doesn’t automatically know that it should re-fetch videos when category changes. The useEffect hook solves this by letting you run some code whenever something (like category) changes.

  useEffect(() => {
    fetchdata();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        //this map methos are run 50 times and return the card based on the data state variable and in data variable are store the result of the our fetch api result based on the category
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_conveter(item.statistics.viewCount)} views &{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Feed;
