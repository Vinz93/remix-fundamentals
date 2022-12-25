import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { marked } from "marked";
import { getPost } from "~/models/post.server";

export async function loader({ params }: LoaderArgs) {
  const slug = params.slug;

  if (!slug) throw new Error("this should not happen");

  const post = await getPost(slug);

  if (!post) throw new Error("There is not post");

  return json({ title: post.title, html: marked(post.markdown) });
}

const PostContent = ({ html }: { html: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const Post = () => {
  const { title, html } = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
      <PostContent html={html} />
    </main>
  );
};

export default Post;
