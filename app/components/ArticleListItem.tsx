import Link from "next/link";
import Image from "next/image";
import type { ArticleItem } from "@/types/index";
import { ExternalLink, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
  category: string;
  articles: ArticleItem[];
}

export default function ArticlesListItem({ articles }: Props) {
  return (
    <div>
      {articles.map((article, index) => (
        <Link
          href={`/blog/${article.id}`}
          key={index}
          className="group flex flex-col w-full h-96 gap-2 bg-gradient-to-br pt-0 from-emerald/5 to-emerald/10 border border-emerald/20 hover:border-emerald/40 rounded-xl overflow-hidden"
        >
          <div className="relative h-50 overflow-hidden">
            <Image
              src={article.banner}
              alt=""
              width={150}
              height={100}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="px-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant="outline"
                className="gap-2 border-emerald/30 bg-emerald/10 text-emerald"
              >
                <Layers className="w-3 h-3" />
                {article.category}
              </Badge>
            </div>
            <div className="mb-6">
              <h1 className="group-hover:text-primary text-xl font-semibold line-clamp-1">
                {article.title}
              </h1>
              <p className="text-sm text-white/60 line-clamp-2">
                {article.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">{article.date}</p>
              <button className="text-emerald hover:text-emerald-400 flex items-center gap-2 font-medium hover:cursor-pointer">
                View Details
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
