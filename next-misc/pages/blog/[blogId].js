import Head from 'next/head'
import { use } from 'react'

function Blog({ title, description }){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <div className='content'>
                <h1>
                    {/* if the .env variable doesn't have a NEXT_ keyword the content of the variable will not be rendered for security */}
                    Env analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
                    : : 
                    Env password = {process.env.DB_PASSWORD}
                </h1>
            </div>
        </>
    )
}

export default Blog

export async function getStaticPaths(){
    return{
        paths: [{params: {blogId: '1'}}],
        fallback: false,
    }
}

export async function getStaticProps(){
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    console.log(`Connecting to database with username ${user} and password ${password}`)
    
    return{
        props: {
            title: 'Article Title',
            description: 'Article description'
        },
    }
}