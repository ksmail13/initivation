// src/pages/DirectionsPage.js
import Card from '../component/Card';

function DirectionsPage() {
  const kaMapIco = './invitation/kakaomap_basic.png';
  const NaMapIco = './invitation/Map_Service_Icon.png';
  const TMapIco = './invitation/tmap_icon.jpeg';
  return (
    <Card>
      <div className="text-center h-full">
        <h1 className='text-3xl pb-3 block'>찾아오는 길</h1>
        <div className='flex flex-col md:flex-row h-9/10'>
          <div className='w-full h-1/2 md:h-full'>
            <iframe width="100%" height='100%' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%EC%A0%95%EC%9E%90%EB%8F%99%20178-4+(%EB%84%A4%EC%9D%B4%EB%B2%84%201784)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/collections/drones/">buy drones</a>
            </iframe>
          </div>
          <div className="w-full mt-4 h-1/2 md:h-full overflow-y-auto">
            <div className="mt-2 mb-2 flex flex-col md:flex-row gap-2 justify-center">
              <a
                href="https://naver.me/54LbuEe5"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-10 pl-9 mx-1 text-stone-700 px-4 py-2 rounded font-nanum-gothic-bold bg-no-repeat bg-contain bg-white bg-size-[auto_20px] block`}
                style={{ backgroundImage: `url(${NaMapIco})`, backgroundPosition: '0.7rem' }}
              >
                네이버 지도
              </a>
              <a
                href="https://place.map.kakao.com/422822065"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-10 pl-9 mx-1 text-stone-700 px-4 py-2 rounded font-nanum-gothic-bold bg-no-repeat bg-contain bg-white bg-size-[auto_20px] block`}
                style={{ backgroundImage: `url(${kaMapIco})`, backgroundPosition: '0.7rem' }}
              >
                카카오 맵
              </a>
              <a
                href="https://tmap.life/bf17a3f8"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-10 pl-9 mx-1 text-stone-700 px-4 py-2 rounded font-nanum-gothic-bold bg-no-repeat bg-contain bg-white bg-size-[auto_20px] block`}
                style={{ backgroundImage: `url(${TMapIco})`, backgroundPosition: '0.7rem' }}
              >
                T 맵
              </a>
            </div>
            <div className='md:p-10 md:pt-0 text-left whitespace-pre-wrap'>
              <div className='mb-3'>
                <h5 className='font-bold text-lg'>[지하철 이용시]</h5>
                <ul className='list-disc pl-[1rem]'><li>분당선, 신분당선 정자역 3번 출구 <br></br>(버스이용 또는 도보 15분)</li></ul>
              </div>
              <div className='mb-3'>
                <h5 className='font-bold text-lg'>[버스 이용시 : 정자역 정류장 승차]</h5>
                <p>상록마을(임광,보성)미켈란쉐르빌 정류장 하차 후 도보 200m</p>
                <ul className='list-disc pl-[1rem]'>
                  <li>직행 : 102, 1101, 1303</li>
                  <li>일반 : 250, 300, 380, 390, 520, 820</li>
                </ul>
                <p>네이버, 미켈랑쉐르빌 정류장 하차 후 정면</p>
                <ul className='list-disc pl-[1rem]'>
                  <li>마을 : 2, 2-1</li>
                </ul>
              </div>
              <div className=''>
                <h5 className='font-bold text-lg'>[주차 안내]</h5>
                <p>1784 건물과 그린 팩토리는 지하2층부터 5층 까지 연결되어 있습니다. <br className='inline md:hidden' />그린팩토리로 진입시 지하2층에서 1784 건물로 이동해 주차해주시면 됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DirectionsPage;