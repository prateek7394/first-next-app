import Link from "next/link";

const index = () => {
  return (
    <>
      
      <Link href={"/product/1"} passHref>
        <h2 >Product 1</h2>
      </Link>
      <Link href={"/product/2"} passHref>
        <h2 >Product 2</h2>
      </Link>
      <Link href={"/product/3"} passHref>
        <h2 >Product 3</h2>
      </Link>
      <Link href={"/"}>
        <a >Go to Home Page</a>
      </Link>
    </>
  );
};

export default index;
