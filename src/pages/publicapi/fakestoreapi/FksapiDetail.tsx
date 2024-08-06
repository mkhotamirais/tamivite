import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { LoaderPulse } from "@/components/loader-pulse";
import { AppDispatch, RootFksapi } from "@/redux/store";
import { emptyDataId, getFakeProductById } from "@/redux/features/fksapiSlice";

export default function FksapiDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(emptyDataId());
    dispatch(getFakeProductById(id as string));
  }, [dispatch, id]);
  const {
    singleProduct: data,
    singleStatus: status,
    singleError: error,
  } = useSelector((state: RootFksapi) => state.fksapi);

  let content;
  if (status === "loading") content = <LoaderPulse />;
  else if (status === "failed") content = <div className="text-red-500">{error as React.ReactNode}</div>;
  else if (status === "succeeded") {
    if (data) {
      content = (
        <>
          Detail {data?.title}
          <div className="flex flex-col sm:flex-row gap-3">
            <figure className="flex-1">
              <img
                src={data?.image}
                alt={data?.title || "no image"}
                className="scale-90 w-full h-full object-contain transition-all duration-500"
              />
            </figure>{" "}
            <div className="flex-1 border rounded p-3 flex flex-col gap-2">
              <div>
                <b>Id</b> : {data?.id}
              </div>
              <div>
                <b>Title</b> : {data?.title}
              </div>
              <div>
                <b>Price</b> : {data?.price}
              </div>
              <div className="flex items-center gap-1">
                <b>Rating</b> : {data?.rating?.rate} <FaStar className="inline" /> | {data?.rating?.count} sold
              </div>
              <div>
                <b>Description</b> : {data?.description}
              </div>
            </div>
          </div>
        </>
      );
    } else content = <div className="text-center italic">no content</div>;
  }
  return content;
}
