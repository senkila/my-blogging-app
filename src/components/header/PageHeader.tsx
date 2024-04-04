import Image from 'next/image'
import Link from 'next/link'
import './header.css'

export const PageHeader = ({ className }: { className?: string }) => {
    return (
        <div>
            <Link href={'/'}>
                <Image
                    src="/header-text.svg"
                    alt="Embracing the Imposter"
                    width={1000}
                    height={150}
                    priority
                    className="heading"
                />
                <Image
                    src="/subheader.svg"
                    alt="A journey from no ops to dev op and beyond"
                    width={1000}
                    height={80}
                    priority
                    className="flavourText"
                />
            </Link>
        </div>
    )
}

export default PageHeader
