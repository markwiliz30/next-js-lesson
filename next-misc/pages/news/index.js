function News({data}){
    return <h1 className="content" >{data}</h1>
}

export default News

export async function getStaticProps(context){
    // preview mode data can access by using "context.previewData" inside a getStaticProps() or getServerSideProps()
    console.log('Running getStaticProps', context.previewData)
    return{
        props: {
            data: context.preview ? 'List of draft articles' : 'List of published articles',
        },
    }
}