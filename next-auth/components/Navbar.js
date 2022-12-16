import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar(){
    const { data: session, status } = useSession();

    // console.log('session => ', session);
    // console.log('status => ', status);
    return(
        <nav className='header'>
            <h1 className='logo'>
                <a href='#'>NextAuth</a>
            </h1>
            {/* <ul className={`main-nav ${!session ? 'loading' : 'loaded'}`}></ul>  for smooth navbar signin and signout transission but not working*/}
            <ul className={`main-nav`}>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </li>
                {
                    !session && status && (
                    <li>
                        <Link href='/api/auth/signin' onClick={e => {
                                e.preventDefault()
                                // remove the inside the signIn() 'github' to promt to github signin page
                                signIn('github')
                            }}>
                           
                                Sign In
                           
                        </Link>
                    </li>)
                }
                {
                    session && (
                    <li>
                        <Link href='/api/auth/signout' onClick={e => {
                                e.preventDefault()
                                signOut()
                            }}>
                            Sign Out
                        </Link>
                    </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar