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
                <a key={video.id} className="swiper-slide"  href={`${video.url}`} target="_blank" rel="noopener noreferrer">
                  <div>
                  <img
                    className="swiper-slide__image"
                    src={video.thumbnail_url}
                    alt="game"
                    />
                    <h4 className="swiper-slide__views">{video.view_count} views</h4>
                  </div>
                  <h3 className="swiper-slide__title">{video.title}</h3>
                  <h4 className="swiper-slide__duration">{video.duration.replace('h','h ').replace('m', 'm ')}</h4>
                  
                </a>
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