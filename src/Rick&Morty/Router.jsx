import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Info from './pages/Info';
import Inicio from './pages/Inicio';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Inicio/>} />
            <Route path="/info/:id" element={<Info/>} />
            <Route path="*" element={<div>404</div> } />
        </Routes>

    </BrowserRouter>
);

export default Router;