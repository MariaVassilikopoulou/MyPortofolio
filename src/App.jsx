import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import router from './router/router';


const customRouter = createBrowserRouter(router.routes, {
  basename: "/MyPortfolio", 
});
function App() {
  return (
    <main>
    <RouterProvider router={customRouter}/>
    </main>
  )
}

export default App
