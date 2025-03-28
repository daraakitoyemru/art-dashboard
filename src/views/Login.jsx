import { Link } from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/Login";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1582562231447-8afae47fce5f?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg bg-opacity-95">
        <Header
          heading="Login to your account"
          paragraph="Don't have an account?"
          linkName="Signup"
          linkUrl="#"
        />
        <Login />
      </div>
      <Footer
        creditText="Still Life with Fruit and Oysters"
        creditAuthor="Europeana"
        creditLink="https://unsplash.com/@europeana"
        bgColor="bg-black"
        textColor="text-white"
      />
    </div>
  );
};

export default LoginPage;
