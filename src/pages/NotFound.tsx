
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div 
        className="rounded-2xl glass p-8 md:p-12 text-center max-w-md border border-border shadow-lg"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, rgba(59, 130, 246, 0) 70%)"
        }}
      >
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl font-bold text-red-500">4</span>
          <span className="text-5xl font-bold text-primary">0</span>
          <span className="text-5xl font-bold text-red-500">4</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-white transition-all hover:shadow-md"
          >
            <ArrowLeft size={18} /> Go Back
          </Link>
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-white transition-all hover:shadow-md"
          >
            <Home size={18} /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
