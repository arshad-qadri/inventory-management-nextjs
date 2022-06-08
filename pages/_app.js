import Layouts from "../layouts/Layouts";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  );
}

export default MyApp;
