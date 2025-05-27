export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col justify-center border border-black rounded-md bg-white h-[600px] w-[300px] p-6 md:w-[600px] md:p-12">
      {children}
    </div>
  );
}
