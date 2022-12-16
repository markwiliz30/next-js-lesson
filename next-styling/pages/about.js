import styles from '../styles/About.module.scss'

function About(){
    return (
        <>
            <div>
                <div className={styles.highlightscss}>About page</div>
                {/* bootstrap is imported in _app.js */}
                <button className='btn btn-primary'>Primary</button>
            </div> 
        </>
    )
}

export default About