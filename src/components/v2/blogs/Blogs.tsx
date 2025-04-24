// app/blogs/page.tsx

import BlogList from "./Bloglist";


export async function Blogs() {
  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          publication(host: "kunalnasa.hashnode.dev") {
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  slug
                  publishedAt
                }
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

    const json = await res.json();
    const posts = json?.data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];


  return (
    <div className="flex w-full md:w-3/4 flex-col">
        <h3 className="text-lg font-semibold dark:text-white text-gray-700 py-2">Blogs</h3>
        <p className="text-sm pb-4 text-gray-500">I recently started writing blogs. Feel free to explore them below.</p>

        <BlogList posts={posts} />
    </div>
  )
}

export default Blogs;
