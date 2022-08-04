import { Navigate, Route, Routes } from 'react-router-dom'
import { Case } from '../Case'

export const ProjectsRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='case/:id' element={<Case />} />

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </>
  )
}
