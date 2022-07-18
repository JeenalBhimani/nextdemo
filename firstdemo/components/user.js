function Users({ user }) {
    return (
        <>
            <div >
                <p>{user.name}</p><br />
                <p>{user.email}</p>
            </div>
        </>
    )
}

export default Users