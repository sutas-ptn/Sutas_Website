
function Project (){
    return(
        <div className=" bg-black  " id="Project">
            <div className="flex flex-col w-full mb-12">
                    <div className="divider divider-error font-medium text-4xl text-white">My Project</div>
            </div>

                <div className=" md:min-h-screen flex flex-col max-w-6xl mx-auto justify-center">
                    <div className="carousel  ">
                        
                        <div id="slide1" className="carousel-item relative w-full">
                            <a href="https://khon-mask.web.app/index.html" target="_blank" rel="noreferrer" className="duration-300 grayscale hover:grayscale-0">
                                <img src={"Khon.jpg"} className="w-full "alt="" />
                            </a>    
                                <div className="absolute flex transform -translate-y-1/2 left-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a> 
                                </div>
                                <div className="absolute flex transform -translate-y-1/2 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                        </div> 
                        
                        
                    </div>
                </div>
                <footer className=" bg-orange-500 footerglow  p-1 ">
                    <div className="max-w-6xl mx-auto flex flex-row justify-center items-center ">
                        <div className="text-sm md:text-xl text-white"> 
                            <p>Developed by Sutas Pattanaworapongkul</p>
                        </div> 
                        
                    </div>
                </footer>
        </div>
    )
}

export default Project;