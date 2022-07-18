import Link from 'next/link'

function index() {
  return (
    <>
      <h1>index pre rendering demo </h1>
      <Link href="/users">
        <a>
          go to UserList
        </a>
      </Link>
      <Link href="/posts">
        <a>
          go to PostList
        </a>
      </Link>
    </>
  )
}

export default index 