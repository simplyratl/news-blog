"use client";

import React, { useState } from "react";
import { BASE_URL } from "@/utils/constants";
import { TNews } from "@/app/models/Models";
import ArticleItem from "@/app/components/shared/blogs/article-item";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const ArticleList = ({ initialNews }: any) => {
  const queryClient = useQueryClient();

  const {
    data: newNews,
    isFetching,
    isError,
  } = useQuery(["news"], () => getNews(size), {
    initialData: initialNews,
    refetchOnWindowFocus: false,
  });

  async function getNews(size: number) {
    const res = await fetch(`${BASE_URL}/scraping/news?pageSize=${size}`);
    const json = await res.json();
    return json.articles;
  }

  const [size, setSize] = React.useState(40);
  const [news, setNews] = useState(newNews);

  const loadMore = async () => {
    const newNews = await queryClient.fetchQuery(["news"], () => getNews(size));
    setNews((prev: TNews[]) => [...prev, ...newNews]);
    setSize((prevSize) => prevSize + 20);
  };

  return (
    <div>
      {news ? (
        <div>
          <ul className="flex flex-col gap-6">
            {news.map((article: TNews) => (
              <li key={article.title.toLowerCase()}>
                <ArticleItem article={article} />
              </li>
            ))}
          </ul>

          <div className="text-2xl">{news.length}</div>
        </div>
      ) : (
        <div>Error...</div>
      )}

      {isFetching ? <div>Loading...</div> : null}
      {isError ? <div>Error...</div> : null}

      <button
        className="text-blue-400 text-2xl mt-8 mb-4"
        onClick={loadMore}
        disabled={isFetching}
      >
        Load more
      </button>
    </div>
  );
};

export default ArticleList;
