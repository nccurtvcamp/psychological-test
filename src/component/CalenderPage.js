'use client';


export default function CalenderPage({year,month,day,weekDay}) {

  return (
    <>
        <div className='relative bg-white rounded-2xl flex items-center justify-center flex-col text-[#4737AC] p-6'>
            <div className='flex justify-between gap-3'>
            <div className=''> 2025 </div>
            <div className=''> 乙巳年[蛇]四月初四 </div>
            <div className=''> 五月 </div>
            </div>
            <div className='text-[240px] font-extrabold'> 01 </div>
            <div className='text-[60px]'> 星期四 </div>
        </div>
    </>
  );
}