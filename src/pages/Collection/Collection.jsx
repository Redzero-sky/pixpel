import React from "react";
import { Header } from "../../components";
import "./Collection.scss";


const Collection = () => {
  return (
    <div className="collection">
      <Header></Header>
      <div className="container">
        <h2 className="collection__title">
          Collection
        </h2>
        <div className="flex gap-4 mb-1">
          <div className="flex col-6 collection__panel">
            <div className="col-4">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="#37404C" />
              </svg>
            </div>
            <div className="col-8">
              <h4 className="mb">Logo Image</h4>
              <h6 className="mb">350 X 350 RECOMMEND</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <button className="collection__btn">
                UPLOAD
              </button>
            </div>
          </div>
          <div className="flex col-6 collection__panel">
            <div className="col-6">
              <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="200" rx="10" fill="#37404C" />
              </svg>

            </div>
            <div className="col-6">
              <h4 className="mb">Featured Image</h4>
              <h6 className="mb">600 X 400 RECOMMEND</h6>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button className="collection__btn">
                UPLOAD
              </button>
            </div>
          </div>
        </div>
        <div className="collection__banner">
          <div className="collection__banner_img mb-1">

          </div>
          <div className="flex gap-4">
            <span>Banner Image</span>
            <span>350 X 350 RECOMMEND</span>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Collection;