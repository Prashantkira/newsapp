import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home(props) {
  let [articles, setArticles] = useState([]);
  let [totalResults, settotalResults] = useState(0);
  let [page, setPage] = useState(1);

  async function getAPIdata() {
    var response;
    setPage(1);
    if (props.search)
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.search}&pageSize=12&page=${page}&language=${props.language}&apiKey=5e8f361fd76141c4917eaa59a67d7585`
      );
    else
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&language=${props.language}&apiKey=5e8f361fd76141c4917eaa59a67d7585`
      );

    response = await response.json();
    setArticles(response.articles);
    settotalResults(response.totalResults);
  }
  let fetchData = async () => {
    setPage(page + 1);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&language=${props.language}&apiKey=5e8f361fd76141c4917eaa59a67d7585`
    );
    response = await response.json();
    if (response.articles) {
      setArticles(articles.concat(response.articles));
    }
  };
  useEffect(() => {
    getAPIdata();
  }, [props]);

  return (
    <>
      <h5 className="backcolor text-center text-light p-1 my-1 text-capitalize">
        {props.search ? props.search : props.q} News Articles
      </h5>
      <div className="container-fluid">
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="w-100 text-center" style={{ height: "100px" }}>
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {articles.map((item, index) => {
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
