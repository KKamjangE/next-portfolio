import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SettingsIcon } from "lucide-react"
import Link from "next/link"

export default function AdminButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="absolute bottom-10 right-10 z-50 h-14 w-14"
                    size={"icon"}
                >
                    <SettingsIcon className="size-8" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-screen-sm">
                <DialogHeader>
                    <DialogTitle>Admin Menu</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4">
                    <Link href={"create-project"}>
                        <DialogClose asChild>
                            <Button>Create Project</Button>
                        </DialogClose>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}
