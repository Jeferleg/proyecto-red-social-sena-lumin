export default function Home() {
  return (
    <body className="flex items-center justify-center min-h-screen">
      <main>
        <div className="text-4xl font-bol p-2">
          Pagina principal en contrucción
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <a href="http://localhost:3000/signup">Ver pagina de registro</a>
        </button>
      </main>
    </body>
  );
}
