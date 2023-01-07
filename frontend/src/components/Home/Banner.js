import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
            <div className="container p-4 text-center ">
              <input 
                type="input" 
                id="search-box" 
                name="q" 
                incremental 
                minlength="3" 
                placeholder="What is that you truly desire?" 
                size="30" 
                onChange={({ target }) => {
                  const title = target.value;
                  if (title.length() > 2) {
                    props.onSearch(
                      title,
                      (page) => agent.Items.byTitle(title, page),
                      agent.Items.byTitle(title),
                    );
                  }
                }} />
            </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
