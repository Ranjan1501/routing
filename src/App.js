import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { User } from "./components/User";
import { UserDetails } from "./components/UserDetails";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/contactus"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/products/:id" element={<Products />}></Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        ></Route>
        {/* id would be same as imporing from params */}
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="*"
          element={
            <img
              src="https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf"
              alt="Page not found"
              width="1000px"
              height="550px"
              margin="50px"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
