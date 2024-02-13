import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { urlFor, client } from "@/lib/sanity";
import { SimpleBlog } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const revalidate = 30;

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      'currentSlug': slug.current,
      image
    }`;

  const response = await client.fetch(query);
  return response;
}

const Home = async () => {
  const data: SimpleBlog[] = await getData();
  console.log(urlFor(data[0].image).url());

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((post, index) => (
          <Card className="max-w-[480px]" key={index}>
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              width={500}
              height={500}
              priority
              className="rounded-t-lg h-[250px] object-fill"
            />

            <CardContent className="mt-4">
              <h3 className="text-xl line-clamp-2 font-semibold mb-2">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-sm text-gray-500">
                {post.smallDescription}
              </p>
            </CardContent>

            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
