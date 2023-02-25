import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          Object.values(routerConfig).map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={(
                <div className="app__wrapper">
                  {element}
                </div>
              )}
            />
          ))
        }
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
