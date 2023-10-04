import bannerSvg from '../../assets/bannersvg.svg'
const Banner = () => {
  return (
    <div className='p-10 rounded-[50px] bg-bannerbg'>
      <img src={bannerSvg} alt="banner svg" />
    </div>
  )
}
export default Banner;
