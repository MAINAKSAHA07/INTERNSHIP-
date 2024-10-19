import React, { Suspense } from 'react'
import Loader from './components/Loader';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Routing = React.lazy(() => import('./Routing'))

function App() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <Routing />
    </Suspense>
    </>
  );
}

export default App;