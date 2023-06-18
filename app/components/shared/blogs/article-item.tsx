import React from "react";
import Image from "next/image";
import { TNews } from "@/app/models/Models";
import Link from "next/link";
import { format, formatDistance } from "date-fns";

type Props = {
  article: TNews;
};

const ArticleItem = ({ article }: Props) => {
  const slugifiedTitle = article.title.toLowerCase().replace(" ", "-");

  return (
    <article className="border-b border-neutral-800 py-8">
      <Link
        className="flex gap-4"
        href={`/article/${slugifiedTitle}?url=${article.url}`}
      >
        {article.image && (
          <div className="relative flex-1 aspect-video">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes={"(min-width: 1024px) 30vw, 100vw"}
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="flex-[2] flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <h3>{article.title}</h3>

            <div>
              <p>{article.content}</p>
            </div>
          </div>

          <div>{article.createdAt && <span>{article.createdAt}</span>}</div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleItem;
