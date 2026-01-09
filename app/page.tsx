import Image from "next/image";

<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 bg-custom">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start font-safira-march px-8 sm:px-32 max-w-7xl mx-auto">
        <Image
          src="/imgs/background-home.jpg"
          className="bg-home max-w-full"
          width={1920}
          height={1080}
          alt="Background"
          priority
        />
        <div className="home-content">
          <h4 className="home-hello animate-fadeInLeft">Hello there,</h4>
          <h1 className="home-welcome leading-none animate-fadeInUp">
            Welcome to Anaïs Zhang's Portfolio
          </h1>
        </div>
        <a
          href="/about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        >
          <div className="w-20 h-20 border-4 border-gray-400 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 hover:rotate-12">
            <svg
              className="w-10 h-10 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-lg mt-3">Let's go →</p>
        </a>
      </main>
    </div>
  );
}
