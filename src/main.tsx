import ReactDomClient from "react-dom/client";
import { Dev } from "./index.dev";

ReactDomClient.createRoot(document.getElementById("root")!).render(<Dev />);
