import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  getData(e) {
    this.setState({ search: e.target.value });
  }

  postData(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.search);
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg backcolor">
          <div className="container-fluid">
            <Link className="navbar-brand text-light fw-semibold" to="/">
              NewsApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item d-flex justify-content-around">
                  <Link
                    className="nav-link active text-light fw-semibold"
                    aria-current="page"
                    to="/all"
                    onClick={() => {
                      this.props.changeSearch(" ");
                      this.setState({ search: " " });
                    }}
                  >
                    All
                  </Link>

                  <Link
                    className="nav-link text-light fw-semibold"
                    to="/science"
                  >
                    Science
                  </Link>

                  <Link
                    className="nav-link text-light fw-semibold"
                    to="/medical"
                  >
                    Medical
                  </Link>

                  <Link
                    className="nav-link text-light fw-semibold"
                    to="/technology"
                  >
                    Technology
                  </Link>

                  <Link className="nav-link text-light fw-semibold" to="/music">
                    Music
                  </Link>

                  <Link
                    className="nav-link text-light fw-semibold"
                    to="/sports"
                  >
                    Sports
                  </Link>

                  <Link className="nav-link text-light fw-semibold" to="/crime">
                    Crime
                  </Link>
                </li>
                <li className="nav-item dropdown mx-4">
                  <a
                    className="nav-link dropdown-toggle text-light fw-semibold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Others
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/bollywood">
                        Bollywood
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/hollywood">
                        Hollywood
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/jokes">
                        Jokes
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light fw-semibold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("hi")}
                      >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("en")}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                onSubmit={(e) => this.postData(e)}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  value={this.state.search}
                  name="search"
                  onChange={(e) => this.getData(e)}
                  aria-label="Search"
                />
                <button
                  className="btn backcolor text-light btn-outline-light"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
