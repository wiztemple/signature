import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";

interface PostFields {
  fields: {
    postImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    postTitle?: string;
    blogSummary?: string;
  };
  contentTypeId: string;
}

interface Post {
  sys: {
    id: string;
  };
  fields: PostFields;
}

const Media = () => {
  const client = createClient({
    space: "o79q5kozn1j6",
    accessToken: "4nOV0Nu2nu_89kgusv-uBI7F27zePqrH_liBGMlw_wM",
  });

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getEntries = async () => {
      try {
        const entries = await client.getEntries<PostFields>();
        setPosts(entries.items as unknown as Post[]);
      } catch (error) {
        console.log(error);
      }
    };
    getEntries();
  }, []);

  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        bg="bg-white"
        textColor1="text-midblack"
        primaryBtnClassName="bg-hex-2 !py-2.5"
      />
      <div className="pt-[230px] pb-16 bg-[#f9f5f8]">
        <h1 className="text-center md:text-7xl text-[48px] leading-[1.2em] sm:w-[60%] w-[90%] mx-auto font-bold text-alternate">
          Media & Publications
        </h1>
        <p className="text-center md:text-2xl text-lg md:w-[55%] w-[70%] mx-auto pt-3 text-[#555d6c]">
          Learn about everything, from customer&apos;s success stories to
          getting informed with our latests news
        </p>
      </div>
      <div className="mx-auto lg:w-[60%] md:w-[90%] sm:w-[60%] w-[90%]">
        <div className="md:py-20 py-10 w-full relative">
          {posts?.map((post: any) => (
            <div
              key={post?.sys?.id}
              className="flex md:flex-row flex-col mb-10 gap-6 items-center"
            >
              <div className="flex-1">
                <img
                  className="rounded-[10px] w-full h-[300px] object-cover bg-cover"
                  src={post?.fields?.postImage?.fields?.file?.url}
                  alt={post?.fields?.postTitle}
                />
              </div>
              <div className="flex-1 ">
                <h2 className="text-2xl text-main-3 font-bold">
                  {post?.fields?.postTitle}
                </h2>
                <p className="text-base text-primarygray leading-[2em]">
                  {post?.fields?.blogSummary}
                </p>
                <Link to={`/media-publication/${post?.sys?.id}`}>
                  <button className="bg-hex-3 hover:bg-hex-2 transition-all delay-100 duration-1000 ease-in-out mt-3 rounded-[8px] text-white px-5 py-2.5">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate md:w-[60%] w-full"
          imgContainer="md:w-[40%] w-full"
          textColor="text-primarygray"
          title="Unlock new financial possibilities with us"
          description="Unlock new financial possibilities with us"
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Media;
