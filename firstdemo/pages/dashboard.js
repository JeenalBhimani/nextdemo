import { useState, useEffect } from 'react';

function Dashboard() {
    const [dashboarddata, setDashboarddata] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchdashboardData() {
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setDashboarddata(data);
            setLoading(false);
        }
        fetchdashboardData();
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <>
            <div>
                <h2>Dashboard</h2>
                <h3>post: {dashboarddata.post}</h3>
                <h3>like : {dashboarddata.like}</h3>
                <h3>followers : {dashboarddata.followers}</h3>
                <h3>following : {dashboarddata.following}</h3>

            </div>

        </>
    )
}

export default Dashboard