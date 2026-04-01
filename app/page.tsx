export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-zinc-50 mb-6">
          Site Under Construction
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          We are currently working hard to build this website. Please check back soon!
        </p>
      </main>
    </div>
  );
}