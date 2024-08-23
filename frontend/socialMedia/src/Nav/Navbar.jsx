import newGroup from "./newGroup.png"

function Navbar(){
    return(
        <>
        <div className='bg-slate-600 flex flex-row items-center h-[130px]'>


          <div>
            <img src={newGroup} className="h-[100px] w-[100px] relative left-8"></img>
          </div>

          <div className="flex flex-row justify-center items-center absolute right-16 gap-8 text-[30px] text-white style-none">
            <div>Home</div>
            <div>Contact</div>
            <div>Visit</div>
          </div>


        </div>
        </>
    )
}

export default Navbar