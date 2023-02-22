import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Hello() {
  return <div> Hello, Router</div>;
}

function Home() {
  return <div>Home route</div>;
}

function RoutedComponent() {
  return (
    <BrowserRouter>
      <Hello />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (<RoutedComponent />);
}

export default App;
