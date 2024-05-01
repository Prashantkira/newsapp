import React, { Component } from "react";

export default class Newsitem extends Component {
  getDate(date) {
    return new Date(date).toLocaleDateString();
  }
  render() {
    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card">
            <img
              src={this.props.pic ? this.props.pic : "/noimage.png"}
              className="card-img-top"
              height="150px"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">
                {this.props.title && this.props.title.slice(0, 340)}{" "}
              </h5>
              <div className="d-flex justify-content-between">
                <p>{this.props.source}</p>

                <p>{this.getDate(this.props.date)}</p>
              </div>

              <p className="card-text">
                {this.props.description &&
                  this.props.description.slice(0, 150).concat("...")}
              </p>
              <a
                href={this.props.url}
                className="btn btn-light backcolor text-light w-100"
              >
                Read More...
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
