import Image from "next/image";
import ArticleListMain from "@/app/components/shared/blogs/main/article-list-main";
import Hero from "@/app/components/hero/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ArticleListMain />
    </main>
  );
}
