import Header from "./layouts/header"

export default function Home() {
    return (
      <div className="w-screen">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen mx-[250px] py-2">
          <div className="flex items-center justify-center w-full max-w-4xl px-4 text-center">
            <h1>Hello, world!</h1>
            <p>Welcome to my Next.js app!</p>
            <p>This is a simple example of a Next.js page.</p>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
}