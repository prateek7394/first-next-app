import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: { posts },
  };
};

const blog = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>
      {/* <h3>Create a folder of any route name and create index.js inside it</h3> */}
      <Navbar />
      {posts.slice(0, 5).map((element) => {
        // while(element.id <=5)
        return (
          <div key={element.id} className="ssr-styles">
            <h3>{element.id}</h3>
            <Link href={`/blog/${element.id}`}>
              <h2> {element.title} </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default blog;
