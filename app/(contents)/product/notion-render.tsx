"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { NotionRenderer } from "react-notion-x"

import { ExtendedRecordMap } from "notion-types"

const Collection = dynamic(() =>
    import("react-notion-x/build/third-party/collection").then(
        (mod) => mod.Collection,
    ),
)
const Equation = dynamic(() =>
    import("react-notion-x/build/third-party/equation").then(
        (mod) => mod.Equation,
    ),
)
const Pdf = dynamic(
    () => import("react-notion-x/build/third-party/pdf").then((mod) => mod.Pdf),
    {
        ssr: false,
    },
)
const Modal = dynamic(
    () =>
        import("react-notion-x/build/third-party/modal").then(
            (mod) => mod.Modal,
        ),
    {
        ssr: false,
    },
)

export default function NotionViewer({ data }: { data: ExtendedRecordMap }) {
    return (
        <NotionRenderer
            recordMap={data}
            fullPage
            darkMode
            disableHeader
            components={{
                nextImage: Image,
                nextLink: Link,
                Collection,
                Equation,
                Pdf,
                Modal,
            }}
        />
    )
}
