import Navbar from "@/components/navbar";

export default function AuthLayout({ children }) {
  const isAuth = true;
  if (!isAuth) return <div>You are unauthorized to see this page</div>;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
