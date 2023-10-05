import bannerSvg from '../../assets/bannersvg.svg'
const Banner = () => {
  return (
    <div className='rounded-[50px] relative h-[410px] overflow-hidden bg-bannerbg'>
      <img className='absolute -top-36' src={bannerSvg} alt="banner svg" />
      <div className='text-primaryblack px-10 flex h-full items-center relative justify-between'>
        <div>
          <div className='text-[42px] font-nunito text-alternate font-bold leading-[1.2em]'>Open an account with us in a few simple steps.</div>
          <div className='text-[20px] text-primarygray text-2xl mt-5'>Open an account with us and enjoy the benefits of personalized banking services.</div>
          <button style={{ backdropFilter: "blur(50px)"}} className='bg-hex-2 mt-12 text-white text-lg px-4 py-6 rounded-[10px]'>Open an Account - Coming Soon</button>
        </div>
        {/* <div className=''>
          <img className='h-[340px] rounded-[30px]' src='https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024' alt="Open an account" />
          </div> */}
      </div>
    </div>
  )
}
export default Banner;
