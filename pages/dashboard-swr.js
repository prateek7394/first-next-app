import useSWR from "swr";

// SWR for client-side Data Fetching
// SWR stands for Stale-while-revalidate. It is a package that is used for data fetching

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};
const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);
//   useSWR takes two arguments i.e. a key and a fetcher function

  if (error) return <h2>Oops! An error occurred while fetching the data</h2>;
  if (!data) return <h2>Loading...</h2>;
  return (
    <>
      <h1>User Dashboard</h1>
      <h2>No. of posts = {data.posts}</h2>
      <h2>No. of likes = {data.likes}</h2>
      <h2>No. of Followers = {data.followers}</h2>
      <h2>No. of Followings = {data.followings}</h2>
    </>
  );
};

export default DashboardSWR;
