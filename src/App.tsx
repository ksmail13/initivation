import { useState } from 'react'
import './App.css'
import InvitationPage from './pages/InvitationPage';
import GalleryPage from './pages/GalleryPage';
import DirectionsPage from './pages/DirectionsPage';

function App() {
    return (
        <div className="h-screen overflow-hidden bg-stone-200 font-nanum">
            <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory"> {/* 중앙 정렬 및 최대 너비 설정 */}
                <InvitationPage />
                <GalleryPage />
                <DirectionsPage />
            </div>
        </div>
    );
}

export default App
