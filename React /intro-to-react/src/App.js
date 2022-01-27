import ListComponent from './components/ListComponent'

function App() {
  const message = 'Hello World'
  const content = 'information passed as promp'

  return (
    <>
      <h1>{message}</h1>
      <ListComponent  info={content}/>
    </>
  )
}

export default App
