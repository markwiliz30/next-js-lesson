function Post({ post }) {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(post => {
        return{
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths: [
            {
                params: { postId: '1' },
            },
            {
                params: { postId: '2' },
            },
            {
                params: { postId: '3' },
            },
        ],
        // paths,
        fallback: 'blocking',
        //fallback states false, true, 'blocking'
        // false - if the page is not pre-rendered it will show 404 page
        // true - if the page is not pre-rendered it will request data to the api then pre-render the page on the background during the pre-render process it will show a loading page
        // 'blocking' - if the page is not pre-rendered it will request data to the api then pre-render the page on the background during the pre-render process no loading will show, it will stay on the same page then if the data is available the fetch data will be shown
        // recommended state among the three is the true state
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        )
        const data = await response.json()

        if(!data.id){
            return {
                notFound: true,
            }
        }

        console.log(`Generating page for /posts/${params.postId}`)

        return {
            props: {
                post: data,
            },
        }
}