import "../globals.css";
import Decoration from "@/app/components/Decoration";
import loginImage from '@/assets/login-person.png'; 
import Image from "next/image";


export const metadata = {
  title: "Welcome to Solity",
  description: "Notes app",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center space-x-4 min-h-screen lg:flex-row">
      <Decoration/>

      <Image 
        src={loginImage}
        className="hidden lg:block"
        alt="Login Person" 
        width={450}
        height={450}
      />

      <Image 
        src={loginImage}
        className="block lg:hidden"
        alt="Login Person" 
        width={350}
        height={350}
      />


      <div className="w-3/4 max-w-md lg:w-1/2">

        {children}
      </div>
    </div>
  );
}
