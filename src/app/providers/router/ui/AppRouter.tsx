import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          {
            Object.values(routerConfig).map(({path, element}) => {
              <Route
                key={path}
                path={path}
                element={element} />
            })
          }
        </Routes>
      </Suspense>
  );
}

export default AppRouter;