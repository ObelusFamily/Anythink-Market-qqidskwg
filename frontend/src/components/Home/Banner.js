import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

let filteredItems = null;

const ListFilteredItems = () => {
  if (filteredItems !== null) {
    filteredItems.map((el) => {
      return (
        <span>
          {el}
        </span>
      );
    })
  }
}

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <div id="search-box">
            <div className="container p-4 text-center ">
              <input 
                type="search" 
                id="item-search" 
                name="q" 
                incremental 
                minlength="3" 
                placeholder="What is that you truly desire?" 
                size="30" 
                onChange={() => {
                  const title = document.getElementById("item-search").value;
                  if (title.length() > 3) {
                    filteredItems = agent.Items.byTitle(title);
                  }
                }} />
            </div>
          </div>
          <span> the cool stuff.</span>
        </div>
      <ListFilteredItems />
      </div>
    </div>
  );
};

export default Banner;
