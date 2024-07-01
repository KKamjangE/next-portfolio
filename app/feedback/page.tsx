import { getCachedComments } from "@/app/feedback/actions"
import FeedbackForm from "@/app/feedback/feedback-form"
import { getAuthSession } from "@/lib/auth"

export default async function Feedback() {
    const comments = await getCachedComments()
    const session = await getAuthSession()

    return <FeedbackForm comments={comments} userId={session?.user.id} />
}
