import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Careers = () => {
  return (
    <div className="bg-white font-nunitoSans">
      <Header />
      <div className="bg-main-7 h-screen overflow-hidden">
        <div className="flex justify-between items-center h-full text-primaryblack w-[85%] mx-auto">
          <div className="mt-28">
            <h1 className="text-[72px] w-full text-hex-2 leading-[1.3em] font-bold">Make Your Mark with Signature Bank</h1>
            <button className="bg-hex-2 px-4 py-2 rounded-[10px] text-white mt-4">See Openings</button>
          </div>
          <div className="mt-32 relative w-full">
            <img className="w-[88%] h-full bg-cover object-cover" src="https://framerusercontent.com/images/LD2YvlIeQiCY3FnMyDO9j5kXNM.png" alt="Signature Careers" />
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto">
        <div className="flex justify-between items-center h-[500px]">
          <div className="flex-1">
            <h2 className="text-alternate w-[50%] text-[40px] font-bold">Why join the Signature Bank Team?</h2>
          </div>
          <div className="text-hex-9 flex-1 flex flex-col gap-5 text-lg">
            <p>At Signature Bank, we believe that our employees are our biggest assets and their individuality and uniqueness should be celebrated; just like our signatures are unique to each one of us, a commitment, a symbol of who we are. We are committed to doing things differently, to equipping and empowering our employees to make their mark in the world.</p>
            <p>Our people are young, smart, creative, intrinsically driven, confident, innovative, trustworthy, change-ready, and resilient professionals.</p>
          </div>
        </div>
      </div>
      <div className="bg-main-7">
        <div className="w-[80%] mx-auto py-20">
          <div className="flex flex-col items-center">
            <h2 className="text-primaryblack text-[48px] font-bold">Your Next Big Career Move</h2>
          <p className="text-hex-9 text-lg leading-[28px] text-center w-[48%]">Ready to build the career you have always aspired for? Come be a part of our team.</p>
          </div>
          <div className="flex py-16 gap-24">
            <div className="flex-1">
              <div>
                <img className="h-[250px] w-full object-cover bg-cover rounded-[20px]" src="https://framerusercontent.com/images/PyCKuY2iSMK52l7bamx8etZqIQ.jpg" alt="Signature Careers" />
                <h3 className="text-primaryblack text-[28.56px] mt-5 leading-[1em] font-bold">Management Trainee</h3>
                <h3 className="text-lg leading-[28px] mt-4 text-hex-9">This programme is open to young, bright, purpose driven graduates with potential and a record of excellence. The Bank provides the right environment, training, mentoring and exposure to nurture young talent and position them for a future of endless possibilities.</h3>
                <button className="bg-hex-2 px-4 py-2 rounded-[10px] text-white mt-4">No Job Opening(s)</button>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <img className="h-[250px] w-full object-cover bg-cover rounded-[20px]" src="https://framerusercontent.com/images/Fwu1zhneYJHLHonTc2cAeZdA.jpg" alt="Signature Careers" />
                <h3 className="text-primaryblack text-[28.56px] mt-5 leading-[1em] font-bold">Experienced Hires</h3>
                <h3 className="text-lg leading-[28px] mt-4 text-hex-9">Professionals with expertise, competence and evident potential for leadership are always welcome in Signature Bank. Here, you are given the platform to exhibit and develop your leadership potential, skills, and knowledge. Let your passion take you to places you never thought possible.</h3>
                <button className="bg-hex-2 px-4 py-2 rounded-[10px] text-white mt-4">No Job Opening(s)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate w-[90%]"
          imgContainer=""
          textColor="text-primarygray"
          title="Open an account with us in a few simple steps."
          description="Open an account with us and enjoy the benefits of personalized banking services."
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  )
}
export default Careers;
