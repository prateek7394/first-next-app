import React, { useEffect, useState } from "react";

// Client-side data fetching:
// Here only Initial state(Loading...) is pre-rendered and not the dashboard data(check Network ->dashboard->preview )
// In this case SEO is not required as data is private and sensitive.

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async() => {
        const response = await fetch("http://localhost:4000/dashboard");
        const data = await response.json();

        setIsLoading(false);
        setDashboardData(data);
    }
    fetchDashboardData();
  }, []);

  if(isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
        <h1>User Dashboard</h1>
        <h2>No. of posts = {dashboardData.posts}</h2>
        <h2>No. of likes = {dashboardData.likes}</h2>
        <h2>No. of Followers = {dashboardData.followers}</h2>
        <h2>No. of Followings = {dashboardData.followings}</h2>
    </>
  );
};

export default Dashboard;
