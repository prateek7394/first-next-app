const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h2>
        Showing news for category <i>{category}</i>
      </h2>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.title} {article.category}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(params.category);
  console.log(query); // { subcategory: 'sports', category: 'sports' }
  console.log(req.headers.cookie) // initially undefined

  res.setHeader('Set-Cookie', ['name=Prateek']);

  const { category } = params;
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
