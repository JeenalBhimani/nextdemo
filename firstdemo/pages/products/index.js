import Link from "next/link"


function ProductList({ product }) {
    return (
        <>
            <h1>PostList</h1>
            {product.map((post, id) => {
                return (
                    <>
                        <div key={id}>
                            <Link href={`products/${post.id}`} passHref>
                                <h3>{post.id} {post.title} {post.price}</h3>
                            </Link>
                            <hr />
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default ProductList

export async function getStaticProps() {
    console.log("generating or regenerating static pages")
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()

    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}