import React from "react";
import Image from "next/image";
import { getSingleProduct } from "@/app/(api)/api";

const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const productId = (await params).productId;
  const productDetails = await getSingleProduct(productId);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 p-8 max-w-5xl mx-auto flex items-center">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-12 mt-8 md:mt-16">
        {/* Left Side: Product Image Display */}
        <div className="flex-1 w-full max-w-md bg-white border border-slate-100 rounded-3xl p-8 aspect-square relative flex items-center justify-center shadow-sm">
          <Image
            src={productDetails.image}
            alt={productDetails.title}
            fill
            sizes="(max-w-768px) 100vw, 40vw"
            className="object-contain p-6"
            priority
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="flex-1 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 block mb-2">
              {productDetails.category} / ID: {productId}
            </span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              {productDetails.title}
            </h1>
          </div>

          {/* Pricing & Rating Row */}
          <div className="flex items-center gap-6 pt-2">
            <span className="text-3xl font-black text-slate-900">
              ${productDetails.price.toFixed(2)}
            </span>

            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-sm font-bold text-amber-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{productDetails.rating?.rate}</span>
              <span className="text-slate-400 font-normal text-xs">
                ({productDetails.rating?.count} reviews)
              </span>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Description
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              {productDetails.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/10 transition-colors tracking-wide text-sm uppercase">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
