import Link from "next/link";
import { getArticleData } from "@/lib/articles";
import { ArrowLeft } from "lucide-react";

const Article = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5 mb-20">
      <Link href="/blog" className=" inline-flex items-center gap-2">
        <ArrowLeft /> Back
      </Link>
      <article
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
        className="article"
      />
    </section>
  );
};

export default Article;
