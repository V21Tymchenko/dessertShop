// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navigation from '../Navigation/Navigation';

import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import Navigation from "../Navigation/Navigation";



const SharedLayout = () => {
  return (
    <div>
      <MainHeader/>
      <Navigation />
      <main>
        <Outlet />
      </main> 
      {/* <main>
        <Suspense>
          <Outlet />
        </Suspense></main> */}

    </div>
  );
};

export default SharedLayout;
