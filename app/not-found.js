import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 z-10 relative">
      <div className="text-center max-w-md w-full relative z-10">
        <h1 className="text-[120px] font-bebas text-white mb-2 leading-none">
          404
        </h1>
        <p className="text-xl text-[#E62429] font-bebas uppercase tracking-widest mb-8">
          Lost in the Multiverse
        </p>
        
        <p className="text-zinc-400 font-inter mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/" 
          className="inline-block px-8 py-4 bg-white text-black font-bebas text-xl tracking-widest uppercase rounded-full hover:bg-[#E62429] hover:text-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(230,36,41,0.6)]"
        >
          Return Home
        </Link>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-[#E62429]/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
