import Head from "next/head";
import { SkewLoader } from "react-spinners";
import ImageGallery from "react-image-gallery";
import { SayButton } from "react-say";
import { Menu } from "@headlessui/react";
import { GiSpeaker } from "react-icons/gi";
import ModalMessage from "./components/Modal";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const images = [
    {
      original: "/p1.png",
      thumbnail: "/p1.png",
    },
    {
      original: "/p2.png",
      thumbnail: "/p2.png",
    },
    {
      original: "/p3.png",
      thumbnail: "/p3.png",
    },
  ];
  return (
    <div>
      <Head>
        <title>Studio Orry</title>
        <meta name="description" content="Launin Kasa Tote Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <SkewLoader color="#000" loading={loading} />
        </div>
      ) : (
        <section>
          <div className="flex items-center justify-center py-8">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="w-full ">
            <ImageGallery
              items={images}
              showNav={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={500}
            />
          </div>

          <section className="space-y-4 px-4 lg:px-12 my-8 text-center">
            <div>
              <h1 className="text-lg font-semibold lg:text-3xl text-gray-800 py-4 uppercase">
                The Launin Kasa Tote is here
              </h1>

              <button className="btn ">
                <SayButton speak="LAUNIN KASA TOTE">
                  <span className="capitalize text-xs lg:text-base">
                    <GiSpeaker />
                  </span>
                </SayButton>
              </button>

              <ModalMessage />
            </div>
          </section>
        </section>
      )}
    </div>
  );
}
