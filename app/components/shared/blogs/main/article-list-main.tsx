import React, { useEffect } from "react";
import { use } from "react";
import Image from "next/image";
import ArticleItem from "@/app/components/shared/blogs/article-item";
import { BASE_URL } from "@/utils/constants";
import { TNews } from "@/app/models/Models";
import ArticleList from "@/app/components/shared/blogs/article-list";

async function getNewsInitial() {
  const res = await fetch(`${BASE_URL}/scraping/news?pageSize=20`);
  const json = await res.json();
  return json.articles;
}

const ArticleListMain = () => {
  const initialNews: TNews[] = use(getNewsInitial());

  return (
    <section>
      {/*{news ? (*/}
      {/*  <div>*/}
      {/*    <ul className="flex flex-col gap-6">*/}
      {/*      {news.map((article: TNews) => (*/}
      {/*        <li key={article.title.toLowerCase()}>*/}
      {/*          <ArticleItem article={article} />*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}

      {/*    <div className="text-2xl">{news.length}</div>*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <div>Error...</div>*/}
      {/*)}*/}

      <ArticleList initialNews={initialNews} />
    </section>
  );
};

export default ArticleListMain;
