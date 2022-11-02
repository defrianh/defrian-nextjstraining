import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/avatar'>Avatar</Link></li>
                <li><Link href='/character'>Avatar API</Link></li>
                <li><Link href='/favorite'>My Favorite</Link></li>
            </ul>
            <style jsx>
                {`
                .navigation {
                    padding:5px;
                    border-bottom:1px solid #eaeaea;
                    background:#fff;
                    box-shadow: inset 0 -1px 0 0 #fff, 0 1px 5px rgb(0 0 0 / 10%);
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                    overflow: hidden;
                    width: 50%;
                    margin: 0 auto;
                  }
                  
                  li {
                    float: left;
                    padding: 14px 16px;
                    margin-right:10px;
                  }
                  
                  li a {
                    display: block;
                    text-align: center;
                    text-decoration: none;
                  }
                  li a:hover{
                    color:#0070f3;
                  }
                  li:hover{
                    color:#0070f3;
                  }
            `}
            </style>
        </nav>
    )
}
export default Navbar