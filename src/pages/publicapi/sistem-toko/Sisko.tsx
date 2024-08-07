import React, { useEffect } from "react";
import { useSisko } from "./useSisko";
import { SiskoSearch, SiskoSort, SiskoType } from "./SiskoParams";
import SiskoItems from "./SiskoItems";
import { LoaderPulse } from "@/components/loader-pulse";
import SiskoFooter from "./SiskoFooter";

export default function Sisko() {
  const { loadPage, query, products, getProducts } = useSisko();
  useEffect(() => {
    getProducts(query);
  }, [getProducts, query]);

  console.log(products);

  let content: React.ReactNode;
  if (loadPage) content = <LoaderPulse />;
  else
    content = (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
        {products && products?.map((item) => <SiskoItems key={item.id} item={item} />)}
      </div>
    );
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex gap-3 mb-2">
        <div>
          <SiskoSearch />
        </div>
        <div>
          <SiskoSort />
        </div>
        <div>
          <SiskoType />
        </div>
      </div>
      <div className="grow">{content}</div>
      <SiskoFooter />
    </div>
  );
}
