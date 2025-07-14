import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home.js";
import NotFound from "./containers/NotFound.js";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}
