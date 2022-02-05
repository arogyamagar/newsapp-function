import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              position: "absolute",
              justifyContent: "flex-end",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>

          <img
            src={
              imageUrl
                ? imageUrl
                : "https://i.guim.co.uk/img/media/b51a0bca795b1ed145337657a4143d3bfeeb2fe6/0_0_2999_1800/master/2999.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9308b69bba22415a2917537ed860a00e"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="car-text">
              <small className="text-muted">
                By {!author ? "Unkonwn" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
