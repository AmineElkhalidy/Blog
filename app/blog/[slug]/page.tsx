import { client, urlFor } from "@/lib/sanity";
import { BlogPost } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getBlogPost(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    titleImage,
    content
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data: BlogPost = await getBlogPost(slug);

  console.log(data);

  return (
    <div className="mt-16">
      <h1 className="text-center ">
        <span className="block text-base text-primary font-semibold tracking-wide uppercase">
          Blog Post
        </span>
        <span className="block leading-8 mt-2 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {data.title}
        </span>
      </h1>
      <div className="mt-10 flex items-center justify-center">
        <Image
          src={urlFor(data.titleImage).url()}
          alt={data.title}
          width={800}
          height={800}
          priority
          className="rounded-lg border shadow-md"
        />
      </div>

      <div className="mt-12 prose prose-green prose-xl dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
