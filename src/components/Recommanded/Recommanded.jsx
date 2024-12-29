import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api_key, value_conveter } from "../../data";
import "./Recommanded.css";

function Recommanded({ categoryId }) {
  const [apidata, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=90&regionCode=US&videoCategoryId=${categoryId}&key=${api_key}`;

    const response = await fetch(relatedVideoUrl);
    const data = await response.json();

    // Ensure 'items' exists in the response data before updating state
    setApiData(data.items || []);
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]); // Fetch data whenever the categoryId changes

  return (
    <div className="recommanded">
      {apidata?.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="side-video-list"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{value_conveter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Recommanded;
