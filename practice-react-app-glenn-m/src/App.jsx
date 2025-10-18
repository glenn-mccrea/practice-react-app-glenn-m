import "./App.css";
import ProfileContainer from "./components/ProfileContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <section>
        <Header />
        <h2 id="user-profile-title">User Profiles:</h2>
        <ProfileContainer />
        <Footer />
      </section>
    </div>
  );
}

export default App;
