import Link from 'next/link';

const NewsArticleList = ({articles}) => {
  return (
    <>
    <h1>List of news articles</h1>
    {
        articles.map((article) => {
            return (
                <div key={article.id}>
                    <Link href={`/news/${article.category}`}>
                    <h2>{article.id}- {article.title} | <u>{article.category}</u> </h2>
                    </Link>
                </div>
            )
        })
    }
    </>
  )
}

export default NewsArticleList

export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/news');
    const data = await res.json();

    return {
        props: {
            articles: data
        } 
    }
}