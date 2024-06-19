export default function Home() {
    return (
        <main className="mx-auto flex w-full max-w-screen-sm flex-col">
            <div className="flex justify-center gap-10 p-5">
                <button className="rounded-md bg-amber-500 px-5 py-3 text-white transition-colors hover:bg-amber-600 active:bg-amber-700">
                    Amber
                </button>
                <button className="rounded-md bg-blue-600 px-5 py-3 text-white transition-colors hover:bg-blue-500 active:bg-blue-700">
                    Blue
                </button>
            </div>
        </main>
    );
}
