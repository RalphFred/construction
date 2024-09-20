import { Blogs } from "@/constants";
import Image from "next/image";

export default function Blog() {
  return (
    <div id="blog" className="wrapper mt-32 flex-center flex-col text-center">
      <h2 className="text-4xl lg:text-5xl font-semibold mb-8">Latest Blogs</h2>
      <p className="max-w-[600px] mb-16">
        Blessing welcomed ladyship she met humoured sir breeding her. Six
        curiosity day assurance bed necessary.
      </p>

      <div className="flex flex-wrap justify-center gap-16 w-full overflow-auto blog">
        {Blogs.map((blog, index) => (
          <div
            key={index}
            className="relative group w-full  lg:w-[400px] xl:w-[500px] overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
          >
            <Image
              src={blog.src}
              alt="blog"
              width={500}
              height={500}
              className="w-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 group-hover:bg-black/50 flex flex-col justify-end items-center transition-all duration-500 transform translate-y-6 group-hover:translate-y-0 ">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-white mb-4">{blog.subtitle}</p>

              <button className="mb-12 bg-transparent border border-white text-white w-[180px] py-3 rounded-tl-[36px] rounded-tr-sm rounded-br-[36px] rounded-bl-sm transform translate-y-0 xl:translate-y-full xl:opacity-0 group-hover:opacity-100  group-hover:translate-y-0 transition-all duration-500">
                Read more
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
