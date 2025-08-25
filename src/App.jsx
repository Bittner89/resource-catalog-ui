import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-gray-100 font-sans antialiased'>
      <header className='bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg'>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white">
            Resourcen-Katalog
          </h1>
          <nav>
            {/* Hier kommt spaeter das Menü. */}
          </nav>
        </div>
      </header >
      <main className="container mx-auto p-4 mt-4">
        <p className="text-gray-700 text-lg"> Wilkommen im Ressourcen-Katalog!</p>
      </main>
    </div>
  )
}

export default App
