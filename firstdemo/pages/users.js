import User from '../components/user';
function usersList({ users }) {
    return (
        <>
            <h1>List of  users</h1>
            {users.map((user, id) => {
                return (
                    <User user={user} key={id} />
                )
            })}
        </>
    )
}

export default usersList

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
    return {
        props: {
            users: data,
        },
    }
}