import Button from "./components/ui/Button"



function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline">
    <Button label="Click me" onClick={() => alert("Hello World")} className="bg-blue-500 text-white px-4 py-2 rounded" />
  </h1>
    </>
  )
}

export default App
