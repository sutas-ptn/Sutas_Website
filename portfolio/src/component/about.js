

function About(){
    return(
        <div className="min-h-screen bg-black relative isolate " id="about">
            <div className="flex flex-col w-full">
                    <div className="divider divider-error font-medium text-4xl text-white">About</div>
            </div>
            <div className="mx-auto  max-w-6xl ">
                
                <div className="absolute inset-x-0 -top-40 -z-0 transform-gpu overflow-hidden blur-3xl sm:top-10"aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#f6920f] to-[#f6400f] opacity-30 sm:left-[calc(50%+45rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col gap-x-12 lg:flex-row">
                    <img src={"Profile.jpg"} className="full  md:max-w-lg rounded-lg shadow-2xl"alt="" />
                    <div>
                        <div className="text-2xl text-white mb-4 ">
                            <p className="font-light"><span  className="text-orange-500 font-light ">Sutas</span> Pattanaworapongkul</p>
                        </div>
                        <div className="text-sm text-white text-base md:text-xl">
                            <p>สวัสดีครับ ผมชื่อ สุทัศน์ พัฒนวรพงศ์กุล ชื่อเล่น ทีน อายุ 23 ปี </p>
                            <p>สำเร็จการศึกษาจาก คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี </p>
                            <p>สาขาวิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย </p>
                            <p>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี </p>
                            <p>ผมมีความสนใจในการออกแบบและการพัฒนาเว็บไซต์</p>
                            <p>ผมมีความสนใจในสายงานของ Front-End Developer</p>
                            <p>จึงได้จัดทำเว็บไซต์รวบรวมผลงานนี้ขึ้นเพื่อใช้ประกอบการยื่นสมัครงาน</p>
                        </div>
                    {/* 
                        <div className="flex flex-col md:flex-row gap-x-5 py-2">
                            <h1 className="text-2xl font-bold" style={{color:'#ef7104'}}>ชื่อจริง : </h1>
                            <h1 className="text-2xl font-bold" style={{color:'white'}}>นายสุทัศน์ พัฒนวรพงศ์กุล</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-5 py-2">
                            <p className=" text-2xl font-bold" style={{color:'#ef7104'}}>ชื่อเล่น : </p>
                            <p className=" text-2xl" style={{color:'white'}}>ทีน</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-5 py-2">
                            <p className="text-2xl font-bold" style={{color:'#ef7104'}}>อายุ : </p>
                            <p className="text-2xl" style={{color:'white'}}>23</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-5 py-2">
                            <p className=" text-2xl font-bold" style={{color:'#ef7104'}}>การศึกษา : </p>
                            <p className=" text-2xl" style={{color:'white'}}>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
                        </div>
                    */}    
                        <button className="btn bg-white btglow font-medium border-none hover:bg-orange-500 hover:text-white mt-5 font-light">Resume</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default About;