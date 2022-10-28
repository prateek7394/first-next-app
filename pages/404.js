import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

// Note: It is compulsory to name errorPage file as 404.js

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Navbar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          {/* <Link href="/">
            <a>Back To Homepage</a>
          </Link> */}

          <a onClick={() => router.push("/")}>Back to Homepage</a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
