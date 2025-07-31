// src/components/Logo.tsx
import logo from '/ylc-logo.png' // adjust the path if needed

function Logo() {
  return (
    <img src={logo}      
    alt="YLC Logo" 
    className="h-12 w-auto object-contain" 
    />
  );
}
export default Logo;
