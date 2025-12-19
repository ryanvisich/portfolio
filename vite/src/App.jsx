import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar.jsx';
import TopicOne from './pages/TopicOne.jsx';
import TopicTwo from './pages/TopicTwo.jsx';
import TopicThree from './pages/TopicThree.jsx';
import TopicFour from './pages/TopicFour.jsx';
import TopicFive from './pages/TopicFive.jsx';

export default function App() {
    return (
        <BrowserRouter basename ="/portfolio">
            <Navbar />

            <Routes>
                <Route path="/" element={
                    <div style={{ padding: '20px' }}>
                        <h1>Portfolio</h1>
                        <p>This portfolio will aim to establish a framework for combining quantitative analytical tools with behavioral and social practices to enhance patient experience. Medical facilities have employed such a variety of systems to give their patients an opportunity to express feedback and shape the transformations and improvements made to their care. The focus for administration is shifting from technical expertise and intense medical focus to more heightened attention and importance to the patients themselves. With communication being more widespread and accessible than ever, patients address overall trust and perceived reliability as bases for making decisions on where to get treated. Therefore, adjusting care practices to meet patient needs does not help for only the specific patient, but potential new patients that share similar issues or complications. Through a blend of creating potential useful tools and studying industry implementation, this portfolio will serve as a framework for how healthcare can benefit from the synthesis of analytical depth and patient-centered design.</p>
                    </div>
                } />

                <Route path="/topic1" element={<TopicOne />} />
                <Route path="/topic2" element={<TopicTwo />} />
                <Route path="/topic3" element={<TopicThree />} />
                <Route path="/topic4" element={<TopicFour />} />
                <Route path="/topic5" element={<TopicFive />} />
            </Routes>
        </BrowserRouter>
    );
}