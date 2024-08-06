import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootNews } from "@/redux/store";
import { LoaderPulse } from "@/components/loader-pulse";
import { getNews } from "@/redux/features/newsapiSlice";
import NewsapiItems from "./NewsapiItems";
import NewsapiQ, { NewsapiTop } from "./NewsapiQuery";
import { Container } from "@/components/wrapper";

export default function NewsApi() {
  const { news: data, status, error, query } = useSelector((state: RootNews) => state.newsapi);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNews(query));
  }, [dispatch, query]);

  let content;
  if (status === "loading") content = <LoaderPulse />;
  else if (status === "failed") content = <div className="text-red-500">{error as string}</div>;
  else if (status === "succeeded") {
    if (data && data.length > 0) {
      const renderedData = data && data.map((item, i) => <NewsapiItems key={i} item={item} />);
      content = (
        <>
          <div className="mb-2 flex justify-between items-center gap-4">
            <NewsapiQ />
            <NewsapiTop />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2`}>{renderedData}</div>;
        </>
      );
    } else content = <div className="text-center italic mt-5">no data</div>;
  }

  return (
    <div className="bg-gray-50">
      <Container>
        <div className="p-3">
          <h2 className="text-xl text-center font-bold mb-4">NewsApi</h2>
          {content}
        </div>
      </Container>
    </div>
  );
}
