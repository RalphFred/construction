import { Servicess } from "@/constants";
import Image from "next/image";

export default function Services() {
  return (
    <div className="wrapper flex-between flex-col lg:flex-row gap-8">
      <Image
        src="/images/service.jpg"
        alt="image"
        width={1000}
        height={1000}
        className="w-[480px]"
      />
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-8">
          {Servicess.map((service) => (
            <div key={service.src} className="flex-center gap-8">
              <div className="min-w-[70px] md:min-w-[100px]">
                <Image
                  src={service.src}
                  alt="number"
                  width={200}
                  height={200}
                  className="w-[100px] h-[100px]"
                />
              </div>

              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
