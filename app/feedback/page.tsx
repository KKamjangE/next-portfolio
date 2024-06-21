import db from "@/lib/db";
import { formatToTimeAge } from "@/lib/utils";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";

async function getComments() {
    const comments = await db.comments.findMany({
        include: {
            user: {
                select: {
                    image: true,
                    name: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });

    return comments;
}

export default async function Feedback() {
    const comments = await getComments();
    return (
        <div className="p-5">
            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className="flex w-full flex-col justify-end gap-3 rounded-md bg-neutral-500 p-5 *:text-white"
                >
                    <div className="flex items-center gap-5">
                        {comment.user.image ? (
                            <Image
                                src={comment.user.image}
                                alt={comment.user.name!}
                                width={50}
                                height={50}
                                className="size-12 rounded-full"
                            />
                        ) : (
                            <CircleUserRound />
                        )}
                        <span className="text-lg font-semibold">
                            ✨{comment.user.name}✨
                        </span>
                        <span className="ml-auto">
                            {formatToTimeAge(comment.createdAt.toString())}
                        </span>
                    </div>
                    <p className="text-lg">{comment.payload}</p>
                </div>
            ))}
        </div>
    );
}
