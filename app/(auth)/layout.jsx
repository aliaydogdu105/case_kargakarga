import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";

export default function AuthLayout({ children }) {
  const isAuth = true;
  if (!isAuth) return <div>You are unauthorized to see this page</div>;
  return (
    <div>
      <Navbar />
      <div className=" flex">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
