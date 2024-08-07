import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Home from "./pages/Home.tsx";
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
import UseRef from "./pages/react/UseRef.tsx";
import Typescript1 from "./pages/basic/Typescript1.tsx";
import Typescript2 from "./pages/basic/Typescript2.tsx";
import Typescript3 from "./pages/basic/Typescript3.tsx";
import HtmlStaticWeb from "./pages/html/HtmlStaticWeb.tsx";
import GoogleFontPairing from "./pages/basic/GoogleFontPairing.tsx";
import MysqlLayout from "./pages/databases/mysql/MysqlLayout.tsx";
import MysTheory from "./pages/databases/mysql/MysTheory.tsx";
import MysTables from "./pages/databases/mysql/MysTables.tsx";
import Express from "./pages/nodejs/Express.tsx";
import MysV1Layout from "./pages/nodejs/api-mysql-v1/MysV1Layout.tsx";
import MysV1Home from "./pages/nodejs/api-mysql-v1/MysV1Home.tsx";
import MysV1Users from "./pages/nodejs/api-mysql-v1/MysV1Users.tsx";
import MysV1UsersAdd from "./pages/nodejs/api-mysql-v1/MysV1UsersAdd.tsx";
import MysV1UsersEdit from "./pages/nodejs/api-mysql-v1/MysV1UsersEdit.tsx";
import MongoLayout from "./pages/databases/mongodb/MongoLayout.tsx";
import MongoTheory from "./pages/databases/mongodb/MongoTheory.tsx";
import JpLayout from "./pages/publicapi/jsonplaceholder/JpLayout.tsx";
import Omdb from "./pages/publicapi/omdbapi/Omdb.tsx";
import Jp from "./pages/publicapi/jsonplaceholder/Jp.tsx";
import JpUser from "./pages/publicapi/jsonplaceholder/JpUser.tsx";
import JpUserSingle from "./pages/publicapi/jsonplaceholder/JpUserSingle.tsx";
import JpPost from "./pages/publicapi/jsonplaceholder/JpPost.tsx";
import JpPostSingle from "./pages/publicapi/jsonplaceholder/JpPostSingle.tsx";
import Projects from "./pages/home/Projects.tsx";
import Portofolio from "./pages/home/portofolio/Portofolio.tsx";
import Fksapi from "./pages/publicapi/fakestoreapi/Fksapi.tsx";
import NewsApi from "./pages/publicapi/newsapi/Newsapi.tsx";
import SiskoLayout from "./pages/publicapi/sistem-toko/SiskoLayout.tsx";
import Sisko from "./pages/publicapi/sistem-toko/Sisko.tsx";
import SiskoSingle from "./pages/publicapi/sistem-toko/SiskoSingle.tsx";
import SiskoCart from "./pages/publicapi/sistem-toko/SiskoCart.tsx";
import SiskoCheckout from "./pages/publicapi/sistem-toko/SiskoCheckout.tsx";
import SiskoInvoice from "./pages/publicapi/sistem-toko/SiskoInvoice.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* home */}
      <Route path="projects" element={<Projects />} />
      <Route path="portofolio-legacy" element={<Portofolio />} />
      {/* apps */}
      <Route path="clock" element={<Clock />} />
      <Route path="stopwatch" element={<Stopwatch />} />
      <Route path="symbol-color" element={<SymbolColor />} />
      <Route path="todo" element={<Todo />} />
      {/* html */}
      <Route path="html-accordion" element={<HtmlAccordion />} />
      <Route path="html-carousel" element={<HtmlCarousel />} />
      <Route path="html-accordion" element={<HtmlAccordion />} />
      <Route path="html-static-web" element={<HtmlStaticWeb />} />
      {/* basic */}
      <Route path="sticky" element={<Sticky />} />
      <Route path="flip-text" element={<FlipText />} />
      <Route path="paginasi" element={<Paginasi />} />
      <Route path="canvas" element={<Canvas />} />
      <Route path="svg" element={<Svg />} />
      <Route path="css-background" element={<CssBackground />} />
      <Route path="typescript-1" element={<Typescript1 />} />
      <Route path="typescript-2" element={<Typescript2 />} />
      <Route path="typescript-3" element={<Typescript3 />} />
      <Route path="google-font-pairing" element={<GoogleFontPairing />} />
      {/* components */}
      <Route path="carousel" element={<Carousel />} />
      <Route path="accordion-1" element={<Accordion1 />} />
      <Route path="accordion-2" element={<Accordion2 />} />
      {/* database */}
      <Route path="mysql" element={<MysqlLayout />}>
        <Route index element={<MysTheory />} />
        <Route path="tables" element={<MysTables />} />
      </Route>
      <Route path="mongodb" element={<MongoLayout />}>
        <Route index element={<MongoTheory />} />
      </Route>
      {/* nodejs */}
      <Route path="express" element={<Express />} />
      <Route path="api-mysql-v1" element={<MysV1Layout />}>
        <Route index element={<MysV1Home />} />
        <Route path="users" element={<MysV1Users />} />
        <Route path="add" element={<MysV1UsersAdd />} />
        <Route path="edit/:id" element={<MysV1UsersEdit />} />
      </Route>
      {/* public api */}
      <Route path="jsonplaceholder" element={<JpLayout />}>
        <Route index element={<Jp />} />
        <Route path="users" element={<JpUser />} />
        <Route path="users/:id" element={<JpUserSingle />} />
        <Route path="posts" element={<JpPost />} />
        <Route path="posts/:id" element={<JpPostSingle />} />
      </Route>
      <Route path="omdbapi" element={<Omdb />} />
      <Route path="fakestoreapi" element={<Fksapi />} />
      <Route path="newsapi" element={<NewsApi />} />
      <Route path="sisko" element={<SiskoLayout />}>
        <Route index element={<Sisko />} />
        <Route path="product/:id" element={<SiskoSingle />} />
        <Route path="cart" element={<SiskoCart />} />
        <Route path="checkout" element={<SiskoCheckout />} />
        <Route path="invoice" element={<SiskoInvoice />} />
      </Route>
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
      <Route path="use-ref" element={<UseRef />} />
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
