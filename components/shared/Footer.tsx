import Image from "next/image";

export default function Footer() {
  return (
    <div className="wrapper mt-32 pb-8">
      <div className="flex justify-between">
        <div>
          <h4 className="text-2xl font-semibold text-blue-1 mb-8">
            CONSTRUCTION
          </h4>

          <p className="w-[300px] mb-8 text-gray-600">
            You'll find your next Home loan value you prefer.
          </p>

          <div className="flex gap-6">
            <Image
              src="/images/facebook.svg"
              alt="facebook"
              width={36}
              height={36}
            />
            <Image src="/images/x.svg" alt="x" width={36} height={36} />
            <Image
              src="/images/linkedin.svg"
              alt="linkedin"
              width={36}
              height={36}
            />
          </div>
        </div>

        <div className="flex justify-between gap-16">
          <div>
            <h5 className="font-semibold text-lg mb-8">Quick Links</h5>
            <p className="text-gray-600 mb-1">Home</p>
            <p className="text-gray-600 mb-1">About</p>
            <p className="text-gray-600 mb-1">FAQ</p>
            <p className="text-gray-600 mb-1">Contact</p>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-8">Resources</h5>
            <p className="text-gray-600 mb-1">Our Agents</p>
            <p className="text-gray-600 mb-1">Member Stories</p>
            <p className="text-gray-600 mb-1">Video</p>
            <p className="text-gray-600 mb-1">Free trial</p>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-8">Company</h5> 
            <p className="text-gray-600 mb-1">Privacy</p>
            <p className="text-gray-600 mb-1">Terms of Use</p>
            <p className="text-gray-600 mb-1">Partnership</p>
            <p className="text-gray-600 mb-1">Sitemap</p>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500 text-center mt-8">©Copyright 2024, All Rights Reserved </div>
    </div>
  );
}
