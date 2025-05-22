'use client';

import MobileFrame from "../layout/MobileFrame";
import image from 'next/image';
import titleImg from '@/../public/0.start/title.svg';
import StarBin from '@/../public/0.start/startbin.svg';


export default function StartPage() {

  return (
    <>
      <MobileFrame>
        <div className='flex justify-center items-center flex-col'/>
        <Image src={titleImg} alt='title'/>
        <div>
        有些人天生酥脆，有些人出爐時就塌了。
        你努力發酵、翻滾、等待出爐，
        結果還是變成一坨可頌災難。
        沒關係，這世界不缺完美麵包，
        缺的是——像你一樣軟爛卻獨特的存在。
        現在，就來看看你是什麼等級的失控可頌吧
        </div>
        <Image className='w-[160px]' src={startbin} alt='startbin'/>

        
        </MobileFrame>
    </>
  );
}