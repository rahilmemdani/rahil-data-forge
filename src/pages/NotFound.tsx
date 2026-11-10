import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-blue px-5 text-center text-white">
    <span className="sticker -rotate-3 bg-yellow text-ink">Oops</span>
    <h1 className="display mt-4 text-[clamp(7rem,26vw,16rem)] leading-[0.85] text-orange">404</h1>
    <p className="mt-6 max-w-sm text-white/85">This page isn’t here. Everything else is right where you left it.</p>
    <Link to="/" className="btn-yellow mt-8">
      Back to the homepage
    </Link>
  </div>
);

export default NotFound;
