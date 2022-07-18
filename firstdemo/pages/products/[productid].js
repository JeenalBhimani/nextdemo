import { useRouter } from 'next/router'

function Productid({ products }) {

    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>{products.id} {products.title}</h2>
            <p>{products.price}</p>
            <hr />
        </>
    )
}

export default Productid

// export async function getStaticPaths() {
//     // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     // const data = await response.json()
//     // const paths = data.map(post => ({
//     //     params: {
//     //         postid: `${post.id}`,
//     //     },
//     // }))
//     // return {
//     //     paths,
//     //     fallback: false,
//     // }
//     return {
//         paths: [
//             {
//                 params: { postid: "1" },
//             },
//             {
//                 params: { postid: "2" },
//             },
//             {
//                 params: { postid: "3" },
//             },
//         ],
//         fallback: "blocking",
//     }
// }

export async function getStaticPaths() {
    return {
        paths: [{ params: { productid: "1" } }],
        fallback: true,
    }
}



export async function getStaticProps(context) {
    const { params } = context
    console.log(`regenrating static pages for productid ${params.productid}`)
    const response = await fetch(`http://localhost:4000/products/${params.productid}`)
    const data = await response.json()

    if (!data.id) {
        return {
            notFound: true,
        }
    }

    console.log(data)
    return {
        props: {
            products: data,
        },
        revalidate: 10,
    }
}