import React, { useState, useEffect } from "react";
import "./Playvideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { api_key, value_conveter } from "../../data";
import moment from "moment/moment";

function Playvideo({ videoId }) {
  // State for video data
  const [apidata, setApidata] = useState(null);

  // State for channel owner data
  const [channelData, setChannelData] = useState(null);

  // State for comments
  const [commentData, setCommentData] = useState([]);

  // Fetch video data
  const fetchvideodata = async () => {
    const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${api_key}`;
    const response = await fetch(videodetails_url);
    const data = await response.json();
    setApidata(data.items[0]);
  };

  // Fetch channel and comment data
  const fetchotherdata = async () => {
    if (!apidata || !apidata.snippet) return;

    // Fetch channel data
    const channeldata_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apidata.snippet.channelId}&key=${api_key}`;
    const channelResponse = await fetch(channeldata_url);
    const channelData = await channelResponse.json();
    setChannelData(channelData.items[0]);

    // Fetch comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${api_key}`;
    const commentResponse = await fetch(comment_url);
    const commentData = await commentResponse.json();
    setCommentData(commentData.items);
  };

  // Fetch video data on mount
  useEffect(() => {
    fetchvideodata();
  }, [videoId]);

  // Fetch channel and comment data when video data is updated
  useEffect(() => {
    if (apidata) {
      fetchotherdata();
    }
  }, [apidata]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={apidata && apidata.snippet ? apidata.snippet.title : "Loading..."}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h3 id="video-info">
        {apidata && apidata.snippet ? apidata.snippet.title : "Loading..."}
      </h3>

      <div className="play-video-info">
        <p>
          {apidata ? value_conveter(apidata.statistics.viewCount) : "0"} Views.{" "}
          {apidata && apidata.snippet
            ? moment(apidata.snippet.publishedAt).fromNow()
            : ""}
        </p>
        <div className="button">
          <span>
            <img src={like} alt="" />
            {apidata ? value_conveter(apidata.statistics.likeCount) : "0"}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <div className="user-name">
          <img
            src={channelData ? channelData.snippet.thumbnails.default.url : ""}
            alt=""
          />
          <div className="host-details">
            <p>
              {apidata && apidata.snippet
                ? apidata.snippet.channelTitle
                : "Loading..."}
            </p>
            <span>
              {channelData
                ? value_conveter(channelData.statistics.subscriberCount)
                : "2M"}
            </span>
          </div>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>
          {apidata
            ? apidata.snippet.description.slice(0, 250)
            : "Description not available."}
        </p>
        <hr />
        <h4>
          {apidata ? value_conveter(apidata.statistics.commentCount) : "0"}{" "}
          Comments
        </h4>
        {/* {console.log(commentData,"---------------------")} */}
        {commentData?.map((item, index) => (
          <div key={index} className="comments">
            <img
              src={
                item.snippet.topLevelComment.snippet.authorProfileImageUrl || ""
              }
              alt=""
            />
            <div>
              <h3>
                {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                <span>
                  {moment(
                    item.snippet.topLevelComment.snippet.publishedAt
                  ).fromNow()}
                </span>
              </h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>
                  {value_conveter(
                    item.snippet.topLevelComment.snippet.likeCount
                  )}
                </span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playvideo;
