import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Home from "./pages/Home.tsx";
import Jp from "./pages/publicapi/Jp.tsx";
import Teori from "./pages/Teori.tsx";
import AccordionShad from "./pages/shadcnui/AccordionShad.tsx";
import ProgressBar1 from "./pages/framer/ProgressBar1.tsx";
import Bulb1 from "./pages/framer/Bulb1.tsx";
import Bulb2 from "./pages/framer/Bulb2.tsx";
import Sticky from "./pages/basic/Sticky.tsx";
import ElementScroll from "./pages/framer/ElementScroll.tsx";
import Parallax from "./pages/framer/Parallax.tsx";
import FlipText from "./pages/basic/FlipText.tsx";
import FloatNav1 from "./pages/framer/FloatNav1.tsx";
import FloatNav2 from "./pages/framer/FloatNav2.tsx";
import FloatNav3 from "./pages/framer/FloatNav3.tsx";
import Paginasi from "./pages/basic/Paginasi.tsx";
import Carousel from "./pages/components/Carousel.tsx";
import Accordion1 from "./pages/components/Accordion1.tsx";
import Accordion2 from "./pages/components/Accordion2.tsx";
import HtmlAccordion from "./pages/html/HtmlAccordion.tsx";
import HtmlCarousel from "./pages/html/HtmlCarousel.tsx";
import Canvas from "./pages/basic/Canvas.tsx";
import Svg from "./pages/basic/Svg.tsx";
import CssBackground from "./pages/basic/CssBackground.tsx";
import Clock from "./pages/apps/Clock.tsx";
import Stopwatch from "./pages/apps/Stopwatch.tsx";
import SymbolColor from "./pages/apps/SymbolColor.tsx";
import Landing1 from "./pages/landing/Landing1.tsx";
import Landing2 from "./pages/landing/Landing2.tsx";
import UseState from "./pages/react/UseState.tsx";
import UseEffect from "./pages/react/UseEffect.tsx";
import UseContext from "./pages/react/UseContext.tsx";
import UseCallback from "./pages/react/UseCallback.tsx";
import UseMemo from "./pages/react/UseMemo.tsx";
import UseReducer from "./pages/react/UseReducer.tsx";
import Memo from "./pages/react/Memo.tsx";
import Todo from "./pages/apps/todo/Todo.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="teori" element={<Teori />} />
      {/* apps */}
      <Route path="clock" element={<Clock />} />
      <Route path="stopwatch" element={<Stopwatch />} />
      <Route path="symbol-color" element={<SymbolColor />} />
      <Route path="todo" element={<Todo />} />
      {/* html */}
      <Route path="html-accordion" element={<HtmlAccordion />} />
      <Route path="html-carousel" element={<HtmlCarousel />} />
      <Route path="html-accordion" element={<HtmlAccordion />} />
      {/* basic */}
      <Route path="sticky" element={<Sticky />} />
      <Route path="flip-text" element={<FlipText />} />
      <Route path="paginasi" element={<Paginasi />} />
      <Route path="canvas" element={<Canvas />} />
      <Route path="svg" element={<Svg />} />
      <Route path="css-background" element={<CssBackground />} />
      {/* components */}
      <Route path="carousel" element={<Carousel />} />
      <Route path="accordion-1" element={<Accordion1 />} />
      <Route path="accordion-2" element={<Accordion2 />} />
      {/* public api */}
      <Route path="jsonplaceholder" element={<Jp />} />
      {/* framer */}
      <Route path="progress-bar-1" element={<ProgressBar1 />} />
      <Route path="bulb-1" element={<Bulb1 />} />
      <Route path="bulb-2" element={<Bulb2 />} />
      <Route path="element-scroll" element={<ElementScroll />} />
      <Route path="parallax" element={<Parallax />} />
      <Route path="float-nav-1" element={<FloatNav1 />} />
      <Route path="float-nav-2" element={<FloatNav2 />} />
      <Route path="float-nav-3" element={<FloatNav3 />} />
      {/* shadcnui */}
      <Route path="shad-accordion" element={<AccordionShad />} />
      {/* landing */}
      <Route path="landing-1" element={<Landing1 />} />
      <Route path="landing-2" element={<Landing2 />} />
      {/* react */}
      <Route path="use-state" element={<UseState />} />
      <Route path="use-effect" element={<UseEffect />} />
      <Route path="use-context" element={<UseContext />} />
      <Route path="use-memo" element={<UseMemo />} />
      <Route path="use-reducer" element={<UseReducer />} />
      <Route path="use-callback" element={<UseCallback />} />
      <Route path="memo" element={<Memo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
