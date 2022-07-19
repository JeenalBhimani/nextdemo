import useSWR from "swr"

const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
}

function Dashboardswr() {
    const { data, error } = useSWR("dashboard", fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            <div>
                <h2>Dashboard</h2>
                <h3>post: {data.post}</h3>
                <h3>like : {data.like}</h3>
                <h3>followers : {data.followers}</h3>
                <h3>following : {data.following}</h3>
            </div>
        </>
    )
}

export default Dashboardswr
