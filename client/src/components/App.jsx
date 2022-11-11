import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import ContextProvider from "../context/ContextProvider";
import DetailView from "./Details/DetailView";
import Cart from "./Cart/Cart";

function App() {
    return (
        <ContextProvider>
            <BrowserRouter>
                <Header />
                <Box style={{ marginTop: 55 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<DetailView />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                </Box>
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;