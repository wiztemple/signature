import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import Banner from "../../components/Banner";
import MediaDetailComponent from "../../components/Media";

interface Post {
  contentTypeId: string;
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: {
    postImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    postTitle: string;
    postDetail: string;
    createdDate: string;
  };
}

const MediaDetails = () => {
  const client = createClient({
    space: "o79q5kozn1j6",
    accessToken: "4nOV0Nu2nu_89kgusv-uBI7F27zePqrH_liBGMlw_wM",
  });

  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEntryById = async () => {
      if (id) {
        try {
          const entry = await client.getEntry<Post>(id);
          setPost(entry as unknown as Post);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
    };
    getEntryById();
  }, []);

  function formatDate(inputDateString: string): string {
    const date = new Date(inputDateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className="bg-white">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        bg="bg-white"
        textColor1="text-midblack"
        primaryBtnClassName="bg-hex-2 !py-2.5"
      />
      {loading ? (
        <p className="flex text-center justify-center text-lg">Loading...</p>
      ) : (
        <MediaDetailComponent
          img={post?.fields?.postImage?.fields?.file?.url}
          title={post?.fields?.postTitle}
          date={formatDate(post?.fields?.createdDate || "")}
          link={`/media-publication/${post?.sys?.id}`}
          children={
            <div className="mt-5">
              <p className="pt-5 text-main-4 text-base leading-8">
                {post?.fields?.postDetail || ""}
              </p>
            </div>
          }
        />
      )}
      <div className="lg:w-[85%] w-[90%] bg-white mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate w-[90%]"
          imgContainer=""
          textColor="text-primarygray"
          title="Open an account with us in a few simple steps."
          description="Open an account with us and enjoy the benefits of personalized banking services."
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
    </div>
  );
};

export default MediaDetails;
