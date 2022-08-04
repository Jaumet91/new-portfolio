import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Project } from '../pages';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Project />} />

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </>
  );
};
