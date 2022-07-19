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
      <br />
      <Link href="/posts">
        <a>
          go to PostList
        </a>
      </Link>
      <br />
      <Link href="/news">
        <a>
          go to newslist
        </a>
      </Link>
      <br />
    </>
  )
}

export default index 