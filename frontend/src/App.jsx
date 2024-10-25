import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_100px,#085F63,transparent)]" />
        </div>
        {/* <LoginPage /> */}
        {/* <SignupPage /> */}
        <HomePage />
      </div>
    </>
  );
}

export default App;
