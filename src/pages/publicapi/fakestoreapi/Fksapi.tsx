import { LoaderPulse } from "@/components/loader-pulse";
import { useSelector } from "react-redux";
import { InitialProduct } from "@/redux/features/fksapiSlice";
import { RootFksapi } from "@/redux/store";
import React from "react";
import FksapiItems from "./FksapiItems";
import { Container } from "@/components/wrapper";

export default function Fksapi() {
  const { products, status, error } = useSelector((state: RootFksapi) => state.fksapi);
  let content;
  if (status === "loading") content = <LoaderPulse />;
  else if (status === "failed") content = <div className="text-red-500">{error as React.ReactNode}</div>;
  else if (status === "succeeded") {
    const renderedData = products && products.map((item: InitialProduct) => <FksapiItems key={item?.id} item={item} />);
    content = (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-2">{renderedData}</div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Container>
        <div className="p-3">
          <h2 className="text-xl font-bold text-center mb-4">FakestoreApi</h2>
          {content}
        </div>
      </Container>
    </div>
  );
}
