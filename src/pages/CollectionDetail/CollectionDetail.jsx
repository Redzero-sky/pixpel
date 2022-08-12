import React from 'react';
import "./CollectionDetail.scss";
import { Header } from '../../components';

const CollectionDetail = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <h2>Create a New NFT</h2>

        <div className="flex gap-4 mt-2">
          <div className="col-6">
            <img src="assets/images/market/nft-1.jpg" alt="" className="detail-picture" />
          </div>
          <div className="col-6">
            <div className="btn btn--secondary btn-block flex middle justify-between mb-1">
              <span>Name</span>
              <span className="card__name">Archer</span>
            </div>
            <div className="btn btn--secondary btn-block flex middle justify-between mb-1">
              <span>Collection</span>
              <span className="card__name">The Warrior</span>
            </div>
            <div className="btn btn--secondary btn-block flex middle justify-between mb-1">
              <span>Total Supply</span>
              <span className="card__name">800</span>
            </div>
            <div className="row mb-1">
              <div className="col-4">
                <button className="collection__btn" style={{ width: '100%', backgroundColor: '#2EBD85' }}>
                  Open auction
                </button>
              </div>
              <div className="col-4">
                <button className="collection__btn" style={{ width: '100%', backgroundColor: '#0095C8' }}>
                  Mystery box
                </button>
              </div>
              <div className="col-4">
                <button className="collection__btn" style={{ width: '100%', backgroundColor: '#F6465D' }}>
                  Fix Price
                </button>
              </div>

            </div>
            <div className="row mb">
              <div className="flex column col-4">
                <span>Price:</span>
                <div className="detail-qty mt">
                  <image src="assets/images/UserHome/avax.png" />


                </div>
              </div>
              <div className="flex column col-4">
                <span>Duration:</span>
                <span className="detail-qty mt">500</span>
              </div>
              <div className="flex column col-4">
                <span>Price:</span>
                <span className="detail-qty mt">500</span>
              </div>
            </div>
            <div className="row mb">
              <div className="flex column col-4">
                <span>QTY:</span>
                <span className="detail-qty mt">500</span>
              </div>
              <div className="flex column col-4">
                <span>QTY:</span>
                <span className="detail-qty mt">500</span>
              </div>
              <div className="flex column col-4">
                <span>QTY:</span>
                <span className="detail-qty mt">500</span>
              </div>
            </div>
            <div className="row">
              <div className="flex column col-4">
                <span>QTY:</span>
                <span className="detail-qty mt">500</span>
              </div>
              <div className="flex column col-4">
                <span>QTY:</span>
                <span className="detail-qty mt">500</span>
              </div>
              <div className="flex column col-4">
                <span>QTY:</span>
                <span className="detail-qty mt">500</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex column col-6">
            <span className="mb-1">Collection:</span>
            <input type="text" className="collection__input" placeholder="The Warrior" />
          </div>
          <div className="flex column col-6">
            <span className="mb-1">Sub-Collection:</span>
            <input type="text" className="collection__input" placeholder="https://pixpel.com/collection/" />
          </div>
        </div>

        <button className="collection__btn mt-2 mb-1" style={{ width: '100%' }}>
          CREATE NFT
        </button>
      </div>
    </>
  );
}

export default CollectionDetail;