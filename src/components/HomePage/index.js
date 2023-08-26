import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { get_top_posts } from "../../actions/posts";
import { connect } from "react-redux";
import "./index.scss";

const HomePage = (isAuthenticated) => {
  const [topPosts, setTopPosts] = useState([]);
  useEffect(() => {
    // Call the load_posts function and handle the data
    get_top_posts()
      .then((data) => {
        // Here, data will contain the posts retrieved from the API
        setTopPosts(data);
      })
      .catch((error) => {
        // Handle errors if needed
        console.error("Error loading posts:", error);
      });
  }, []);

  let navigate = useNavigate();

  const handleButtonClick = (webLink, username, title, tech_stack) => {
    navigate(`/posts/${encodeURIComponent(webLink)}`, {
      state: {
        username: username,
        title: title,
        tech_stack: tech_stack,
      },
    });
  };

  const loginLink = (
    <Fragment>
      <div className="nav-item">
        <Link to="/login">Login to make a post</Link>
      </div>
    </Fragment>
  );
  const postLink = (
    <Fragment>
      <div className="nav-item">
        <Link to="/submitpost">Submit Post</Link>
      </div>
    </Fragment>
  );

  return (
    <>
      <div className="main-page">
        <div className="left-homepage">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </div>
        <div className="center-homepage">
          <p>Rate my website</p>
          {topPosts.map((post, index) => (
            <div className="single-post"  onClick={() =>
              handleButtonClick(
                post.website_link,
                post.username,
                post.title,
                post.tech_stack
              )
            } key={index}>
              <div className="post-info">
                <p className="post-username">{post.username}</p>
                <p className="post-title">{post.title}</p>
                <p className="post-tech-stack">{post.tech_stack}</p>
              </div>
              <div className="website-preview">
                <button
                  className="preview-button"
                  onClick={() =>
                    handleButtonClick(
                      post.website_link,
                      post.username,
                      post.title,
                      post.tech_stack
                    )
                  }
                >
                   <img src="https://www.youtube.com/favicon.ico" alt="YouTube Favicon" />
                </button>
              </div>
            </div>
          ))}
          <div className="load-all-websites">
            <ul className="load-websites">
              <div>
                <Link to="/posts">see all posts</Link>
              </div>
            </ul>
            <ul className="load-websites">
              <div>
                {isAuthenticated.isAuthenticated ? postLink : loginLink}
              </div>
            </ul>
          </div>
        </div>
        <div className="right-homepage">
          <button class="">
          
              Make a post
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
