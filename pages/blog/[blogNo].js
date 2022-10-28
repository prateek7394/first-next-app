import Navbar from "../../components/Navbar";

// Getting the id of the element
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((element) => {
    return {
      params: {
        // storing the id in blogNo
        blogNo: element.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {

  const {params} = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogNo}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
};

// Now we have data only related to the specified user id
const blogData = ({data}) => {
  const {id, title, body} = data;
  return (
    <>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <h3>{id}</h3>
        <h2> {title} </h2>
        <p>{body}</p>
      </div>
    </>
  );
};

export default blogData;
