import Image from 'next/image'
import Link from 'next/link'

type BackLinkProps = {
    href: string
    [x: string]: any
}

export const BackLink = ({ href, className, ...props }: BackLinkProps) => {
    return (
        <>
            <Link
                className={`flex flex-row align-middle ${className}`}
                href={href}
            >
                <Image
                    src="/icons/back-arrow.svg"
                    alt="Add"
                    width={24}
                    height={24}
                    priority
                    className="add justify-self-start mr-2"
                />
                <p className="m-0 text-lg">back</p>
            </Link>
        </>
    )
}
