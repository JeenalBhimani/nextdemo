
function AricleListcategory({ articles, category }) {
    return (
        <>
            <h1>showing news for category <i>{category}</i></h1>
            {articles.map((article, id) => {
                return (
                    <>
                        <div key={id}>
                            <h2>{article.id} {article.title}</h2>
                            <p>{article.description}</p>
                            <hr />
                        </div>
                    </>
                )

            })}
        </>
    )
}


export default AricleListcategory

// export async function getServerSideProps(context) {

//     const { params, req, res } = context
//     console.log(req.headers.cookie)
//     res.setHeader('Set-Cookie', ['name=John Doe'])
//     const { category } = params
//     const response = await fetch(`http://localhost:4000/news?category=${category}`)
//     const data = await response.json()
//     // console.log(`pre rendering data for category ${category}`)
//     return {
//         props: {
//             articles: data,
//             category,
//         },
//     }
// }

export async function getServerSideProps(context) {
    console.log(context)
    const { params, req, res } = context
    console.log(req.headers.cookie)
    res.setHeader("Set-Cookie", ["name=rutu"])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    console.log(`pre rendering data for category ${category}`)
    return {
        props: {
            articles: data,
            category
        }
    }
}