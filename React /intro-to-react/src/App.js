import ListComponent from './components/ListComponent'

function App() {
  const message = 'Hello World'
  const content = 'information passed as promp'
  const moreContent = 'more information'

  return (
    <>
      <h1>{message}</h1>
      <ListComponent info={content} moreInfo={moreContent} />
    </>
  )
}

export default App
