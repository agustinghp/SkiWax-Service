import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Beautiful Website</title>
        <meta name="description" content="A beautiful Next.js website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center">
        <section className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to a Beautiful Website</h1>
          <p className="text-lg text-gray-600 mb-6">Clean. Elegant. Modern.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Get Started
          </button>
        </section>
      </main>
      <footer className="w-full text-center py-4 bg-gray-200 text-gray-600 mt-auto">
        © 2024 Beautiful Website. All rights reserved.
      </footer>
    </div>
  );
}
