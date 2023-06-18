import React, { use } from "react";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";
import { TNews } from "@/app/models/Models";

async function getArticle(url: string | null) {
  if (null) return [];
  const urlSend = `https://www.engadget.com/${url}`;
  const res = await axios.post(`${BASE_URL}/scraping/page`, {
    url: urlSend,
  });
  return res.data;
}

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "100", "300", "500", "700", "600"],
  subsets: ["latin"],
});

const ArticlePage = ({ searchParams }: any) => {
  const url = searchParams.url;
  const article: TNews = use(getArticle(url ?? null));

  console.log(article);

  return (
    <article className="pb-12">
      <div className="my-10">
        <h1 className="text-6xl font-bold leading-[4.2rem]">{article.title}</h1>
      </div>

      {article.image && (
        <div className="relative w-full aspect-video">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="mt-24">
        <div
          className={`flex flex-col gap-4 text-neutral-400 text-xl ${ibmPlexMono.className} article-single`}
          dangerouslySetInnerHTML={{ __html: article.content ?? "" }}
        />
      </div>
    </article>
  );
};

export default ArticlePage;
