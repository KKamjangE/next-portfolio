import { getCachedComments } from "@/app/feedback/actions"
import Comment from "@/app/feedback/comment"
import FeedbackForm from "@/app/feedback/feedback-form"
import { getAuthSession } from "@/lib/auth"

export default async function Feedback() {
    const comments = await getCachedComments()
    const session = await getAuthSession()

    return (
        <div className="mx-5">
            <FeedbackForm userId={session?.user.id} />
            <div className="flex flex-col gap-8">
                {comments.map((comment) => (
                    <Comment
                        comment={comment}
                        key={comment.id}
                        userId={session?.user.id}
                    />
                ))}
            </div>
        </div>
    )
}
