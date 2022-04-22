import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import FSACapstone from './projects/FSACapstone';
import SeniorDesign from './projects/SeniorDesign';

function App() {
    return (
        <>
            <div>
                {
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/SeniorDesign" element={<SeniorDesign />} />
                            <Route path="/FSACapstone" element={<FSACapstone />} />
                        </Routes>
                    </BrowserRouter>
                }
            </div>
        </>
    )
}

export default App;