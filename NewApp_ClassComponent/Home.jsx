import React, { Component } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }
  async getAPIdata() {
    var response;
    this.setState({ Page: 1 });
    if (this.props.search)
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&language=${this.props.language}&apiKey=5e8f361fd76141c4917eaa59a67d7585`
      );
    else
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&language=${this.props.language}&apiKey=5e8f361fd76141c4917eaa59a67d7585`
      );

    response = await response.json();
    this.setState({
      articles: response.articles,
      totalResults: response.totalResults,
    });
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&language=${this.props.language}&apiKey=5e8f361fd76141c4917eaa59a67d7585`
    );
    response = await response.json();
    this.setState({
      articles: this.state.articles.concat(response.articles),
    });
  };
  componentDidMount() {
    this.getAPIdata();
  }
  componentDidUpdate(old) {
    if (this.props !== old) this.getAPIdata();
  }

  render() {
    return (
      <>
        <h5 className="backcolor text-center text-light p-1 my-1 text-capitalize">
          {this.props.search ? this.props.search : this.props.q} News Articles
        </h5>
        <div className="container-fluid">
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className="w-100 text-center" style={{ height: "100px" }}>
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
            <div className="row">
              {this.state.articles.map((item, index) => {
                return (
                  <Newsitem
                    key={index}
                    pic={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    date={item.publishedAt}
                    source={item.source.name}
                    url={item.url}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
