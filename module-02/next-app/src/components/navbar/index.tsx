export default function Navbar() {
  return (
    <div className="flex justify-between p-4">
      <div>LOGO</div>
      <div className="flex gap-4">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}
