import Link from "next/link";
import NumberTicker from "../magicui/number-ticker";
import { Stats } from "@/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="wrapper py-12 mt-[120px] md:mt-180px flex items-center">
      <div className="w-full lg:w-[480px] xl:w-1/2">
        <h1 className="text-5xl xl:text-6xl font-semibold mb-8">
          <span className="text-blue-1">Masters</span> of <br className="hidden xl:block"/>
          Consistency and <br className="hidden xl:block"/>
          <span className="text-blue-1">Quality.</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.
        </p>
        <div className="flex gap-8 mb-12">
          <button className="w-[180px] py-3 text-white bg-blue-1 rounded-tl-[36px] rounded-tr-sm rounded-br-[36px] rounded-bl-sm">
            Explore
          </button>
          <button className="w-[180px] py-3 text-blue-1 bg-white border border-blue-1 rounded-tl-[36px] rounded-tr-sm rounded-br-[36px] rounded-bl-sm">
            <Link href="#contact">Contact Us</Link>
          </button>
        </div>
        <div className="flex gap-8 flex-wrap">
          {Stats.map((stat, index) => (
            <div key={index}>
              <h4 className="text-3xl font-semibold mb-2 text-slate-600 relative">
                <Image src={stat.src} alt={stat.name} width={100} height={100} className="w-6 absolute -top-1 -left-1 -z-10"/>
                <NumberTicker value={stat.value} className=""/>
              </h4>
              <p className="text-gray-600 text-lg">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Image src='/images/hero.jpg' alt="Hero Image" width={1000} height={1000} className="hidden lg:block absolute top-0 right-0 w-[520px] xl:w-[600px] -z-10"/>
    </div>
  );
}
