import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import HowItWorks from "../pages/HowItWorks";

const AppRoutes = () => {
    return( 
        <BrowserRouter>
         <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
            </Route>
         </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;