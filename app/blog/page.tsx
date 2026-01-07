import { getCategorizedArticles } from "@/lib/articles";
import ArticlesListItem from "../components/ArticleListItem";
import Header from "../components/Header";
import { Globe } from "lucide-react";

export default function BlogPage() {
  const articles = getCategorizedArticles();

  return (
    <section className="relative flex flex-col w-full min-h-screen gap-8 items-center justify-center px-6 md:px-8 lg:px-10 xl:px-20 mb-20">
      <div className="p-40 absolute -z-10 rounded-full top-10 left-1/3 -translate-x-1/2 shadow-[0_0_200px_0] shadow-primary bg-primary/40 opacity-30"></div>
      <div className="text-center space-y-4">
        <Header
          name="~/blog"
          icon={<Globe size={20} className="text-emerald" />}
        />
        <h1 className="font-bold text-4xl md:text-6xl">Blog</h1>
        <p className="text-xl text-white/50">
          Thoughts, experiences, and insights on technology, business, and life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticlesListItem
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </div>
    </section>
  );
}
