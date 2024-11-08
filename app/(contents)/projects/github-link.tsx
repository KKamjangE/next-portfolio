import GithubIcon from "@/public/github.svg"

interface GithubLinkProps {
    url: string
}

export default function GithubLink({ url }: GithubLinkProps) {
    return (
        <a
            href={url}
            target="_blank"
            className="size-10 fill-black dark:fill-white"
        >
            <GithubIcon />
        </a>
    )
}
