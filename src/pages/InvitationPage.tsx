// src/pages/InvitationPage.js
import Card from '../component/Card';

function InvitationPage() {
  return (
    <Card>
      <div className="bg-cover bg-center h-full flex flex-col items-center justify-center text-center">
        <div className="flex-1 text-4xl font-bold">저희 결혼 합니다.</div>
        <p className='flex-1 mt-2 break-keep'>싱그러운 초록으로 짙어가는 이 여름 저희 결혼합니다. 변하지 않는 사랑으로 부부의 깊은 연을 맺고 한길을 걷고자 합니다. 그 시작의 자리에 함께해 주시길 바랍니다.</p>
        <div className='font-bold'>
          <p className="mt-2">2025년 7월 5일 토요일</p>
          <p>네이버 1784</p>
        </div>
      </div>
    </Card>
  );
};

export default InvitationPage;