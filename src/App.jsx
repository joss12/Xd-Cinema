
import { AllRoutes } from './routes/AllRoutes'
import Header from './component/Header'
import Footer from './component/Footer'

import './App.css'
// function App() {
   

//   return (
//     <BrowserRouter>
//         <div className="App">
//         <ScrollToTop />
//           <Header />
//         <AllRoutes />
//         <Footer/>
//         </div>
//     </BrowserRouter>
    
//   )
// }

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App
