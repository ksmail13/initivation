// src/pages/InvitationPage.js
import { useEffect, useState } from 'react';
import Card from '../component/Card';

const effectToggle = (enable: boolean) => enable ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';

function InvitationPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const date = new Intl.DateTimeFormat(
    "ko-KR",
    {
      weekday: "long",
      year: "numeric",
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      hour12: true
    })
    .format(
      new Date(2025, 6, 5, 13, 0, 0)
    );



  return (
    <Card>
      <div className="bg-cover bg-center h-full flex flex-col items-center justify-center text-center">
        <div
          className={`flex-1 text-4xl font-bold ease-out duration-1000 transition-all ${effectToggle(show)}`}>김민규 ❤️ 강민지</div>
        <p className={`flex-1 mt-2 break-keep duration-1000 transition-all ${effectToggle(show)}`}>
          <span>싱그러운 초록으로 짙어가는 이 여름 저희 결혼합니다. <br className='hidden md:inline' /></span>
          <span>변하지 않는 사랑으로 부부의 깊은 연을 맺고 한길을 걷고자 합니다. <br className='hidden md:inline' /></span>
          <span>그 시작의 자리에 함께해 주시길 바랍니다.</span>
        </p>
        <div className={`font-bold text-lg duration-1000 transition-all ${effectToggle(show)}`}>
          <p className="mt-2">{date}</p>
          <p>네이버 1784 28층 스카이홀</p>
        </div>
      </div>
    </Card>
  );
};

export default InvitationPage;