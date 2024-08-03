export default function Home() {
  return (
    <div className="px-3 flex flex-col gap-5 items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-cyan-500">
      <div className="text-center">
        <h1 className={"text-4xl text-center font-bold mb-5 drop-shadow-md"}>
          Welcome <span className="capitalize">Visitor</span>
        </h1>
        <p className="text-xl font-medium">I am khotami, I am a web developer, my focus is react / nextjs</p>
      </div>
    </div>
  );
}
