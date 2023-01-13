import Nav from "../components/Nav";
// import "../styles/globals.css";
import "../styles/index.css";  
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div className="main-tent"></div>
      <Component {...pageProps} />
    </div>
  );
}
