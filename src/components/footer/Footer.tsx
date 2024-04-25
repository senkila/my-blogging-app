import Link from 'next/link'
import './footer.css'

export const Footer = () => {
    return (
        <div id="footer" className={`footer w-full flex-col`}>
            <ul className="w-full grid grid-cols-2 justify-around">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About me</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer
