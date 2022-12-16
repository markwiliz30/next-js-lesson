import Link from 'next/link'

function PostList({ posts }){
    return (
        <>
            <h1>List of Posts</h1>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            {/* if inside the link is not <a><a/> put passHref on the <Link><Link/> */}
                            <Link href={`posts/${post.id}`} passHref>
                                <h2>
                                    {post.id} {post.title}
                                </h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data,
        },
    }
}