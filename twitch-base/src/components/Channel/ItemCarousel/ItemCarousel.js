import React, { Component } from "react";
import "./ItemCarousel.scss";

class ItemCarousel extends Component {
  

  render() {
    
    const items = this.props.items;

    if (
      items === undefined ||
      items.length === 0
    ) {
      return <div>Loading...</div>;
    } else
      return (
        <div className="carousel-container">
          <div className="swiper-container">
            <h2 className="swiper-container__title">{this.props.title}</h2>

            {/* carousel item */}
            <div className="swiper-wrapper">
              {this.props.items.map((video, i) => (
                <div key={video.id} className="swiper-slide">
                  <img
                    className="swiper-slide__image"
                    src={video.thumbnail_url}
                    alt="game"
                    />
                  <h3 className="swiper-slide__title">{video.title}</h3>
                  {video.view_count} viewers
                </div>
              ))}
            </div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      );
  }
}

export default ItemCarousel;