import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <main className="mx-auto flex-col">
            <div className="flex items-center justify-center gap-10 p-5">
                <Button
                    className="bg-amber-500 hover:bg-amber-400"
                    variant={"outline"}
                    size={"lg"}
                >
                    Amber-500
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-500" size={"lg"}>
                    Blue-600
                </Button>
                <Input placeholder="text" />
            </div>
        </main>
    );
}
