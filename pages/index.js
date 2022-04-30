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
    <div className="scroll-smooth">
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

          <section className="space-y-4 px-4 lg:px-12 my-8 pt-8 text-center">
            <div className="space-y-2">
              <h1 className="text-5xl font-semibold lg:text-6xl text-gray-800 capitalize">
                Launin Kasa
              </h1>
              <p className="text-4xl font-bold">Tote</p>
              <p className="text-3xl font-medium ">is here</p>

              <div className="flex justify-center">
                <audio controls>
                  <source src="/Launin-kasa.m4a" type="audio/mp3" />
                </audio>
              </div>

              <ModalMessage />
            </div>
          </section>
        </section>
      )}
    </div>
  );
}
