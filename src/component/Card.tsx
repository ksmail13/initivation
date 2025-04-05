import { PropsWithChildren } from 'react';

function Card({ children }: PropsWithChildren<{ no?: number }>) {
  return (
    <div className='w-screen h-screen flex items-center justify-center snap-start'>
      <div className="w-5/6 h-9/10 lg:w-lg rounded-lg shadow-2xl p-8 bg-stone-100 text-stone-700">
        {children}
      </div>
    </div>
  );
}

export default Card;
