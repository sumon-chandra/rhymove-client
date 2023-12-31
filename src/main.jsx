import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import AuthProvider from "./context-provider/AuthProvider.jsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
AOS.init();
import "aos/dist/aos.css";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
