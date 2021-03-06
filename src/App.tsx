import React from 'react';
import './App.css';
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import BookSummary from "./components/BookSummary";

function App() {

    return (
        <div className="App">
            <header className="header-container">
                <div className="header">
                    <div className="header-title">
                        <span className="header-span">π±</span>
                        <span>πΎπΎπΊ.</span>
                        <span className="header-span">π»πΎπΆ</span>
                    </div>
                    <Navigation/>
                    <Search/>
                </div>
            </header>
            <BookSummary />
            <footer className="footer-background">
                <div className="footer-content">
                    <div className="footer-title">TO BE CONTINUED...</div>
                    <a href="https://github.com/farodia/WebApp" className="item">GitHub</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
