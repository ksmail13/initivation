// src/pages/DirectionsPage.js
import React from 'react';
import Card from '../component/Card';

function DirectionsPage() {
    return (
      <Card>
        <div className="bg-white">
            <iframe 
                title="Map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.89514059172!2d127.02676051550463!3d37.52439897979317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca13bc2d89c7b%3A0xb007a7ff9cc4e1ba!2sSeoul%20Nambu%20District%2C%20Seoul!5e0!3m2!1sen!2skr!4v1628856679816!5m2!1sen!2skr" 
                className="w-full h-96 rounded-lg"
            ></iframe>
            <div className="mt-4">
                <p>우리 결혼식장은 서울시 강남구 논현동에 있습니다.</p>
                <p>지도 앱을 사용하여 쉽게 찾아볼 수 있습니다:</p>
                <div className="flex mt-2">
                    <a href="https://www.google.com/maps/dir/?api=1&destination=37.5243989,127.0267605" target="_blank" rel="noopener noreferrer" className="mx-1 bg-blue-500 text-white px-4 py-2 rounded">Google Maps</a>
                    <a href="https://www.naver.com/" target="_blank" rel="noopener noreferrer" className="mx-1 bg-green-500 text-white px-4 py-2 rounded">Naver Maps</a>
                </div>
            </div>
        </div>
      </Card>
    );
};

export default DirectionsPage;