function Skill (){
    return(
        <div className=" bg-black " id="Skill">
            <div className="flex flex-col w-full mb-12">
                    <div className="divider divider-error font-medium text-4xl text-white">Skill</div>
            </div>

            <div className="mx-auto md:max-w-6xl  flex flex-col min-h-screen justify-center ">
                <h2 className="text-3xl md:text-4xl text-center text-white mb-12">Languages and tool</h2>
                <div className="grid sm:grid-row justify-items-center md:grid-cols-8 gap-6 mb-12">
                    <div className="col-span-2">
                        <img src={'html.png'} className="w-16 md:w-24 lg:w-32 rounded-lg shadow-2xl" alt=""/>
                    </div>
                    <div className="col-span-2">
                        <img src={'css.png'} className="w-16 md:w-24 lg:w-32 rounded-lg shadow-2xl" alt=""/>
                    </div>
                    <div className="col-span-2">
                        <img src={'js.png'} className="w-16 md:w-24 lg:w-32 rounded-lg shadow-2xl" alt="" />
                    </div>
                    <div className="col-span-2">
                        <img src={'figma.png'} className="w-16 md:w-24 lg:w-32 rounded-lg shadow-2xl" alt=""/>
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl text-center text-white mb-12">libraries and framework</h2>
                <div className="grid sm:grid-row justify-items-center md:grid-cols-8 gap-6 mb-12">
                    <div className="sm:col-start-1 md:col-start-2 col-span-2">
                        <img src={'logo512.png'} className="w-16 md:w-24 lg:w-32 rounded-lg shadow-2xl"alt="" />
                    </div>
                    <div className="col-span-2 flex">
                        <img src={'tailwind.svg'} className="w-16 md:w-24 lg:w-32 rounded-lg shadow-2xl"alt="" />
                    </div>
                    <div className="col-span-2">
                        <img src={'bootstrap.png'} className="w-16 md:w-24 lg:w-32 rounded-lg shadow-2xl"alt="" />
                    </div>
                </div>
                    
                
            </div>
        </div>
    )
}

export default Skill;