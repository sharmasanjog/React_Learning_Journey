import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css"; 
function App() {
  return (
    <div>
      <Header />
      
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <p>Welcome to Day 2 of my React Learning Journey! </p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
