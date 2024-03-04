import Header from "@/layouts/header";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col ">
      <Header />
      <main className="max-w-8xl container mx-auto mt-3 flex-grow px-6">{children}</main>
    </div>
  );
}
