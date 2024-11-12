import VelogIcon from "@/public/velog.svg"

interface VelogLinkProps {
    url: string
}

export default function VelogLink({ url }: VelogLinkProps) {
    return (
        <a
            href={url}
            target="_black"
            className="size-10 fill-black dark:fill-white"
        >
            <VelogIcon />
        </a>
    )
}
