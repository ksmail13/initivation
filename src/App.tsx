import './App.css'
import InvitationPage from './pages/InvitationPage';
import GalleryPage from './pages/GalleryPage';
import DirectionsPage from './pages/DirectionsPage';

function App() {
  return (
    <div className="h-dvh overflow-hidden bg-stone-200 font-nanum break-keep">
      <div className="w-screen h-dvh overflow-y-scroll snap-y snap-mandatory"> {/* 중앙 정렬 및 최대 너비 설정 */}
        <InvitationPage />
        <GalleryPage />
        <DirectionsPage />
      </div>
    </div>
  );
}

export default App
