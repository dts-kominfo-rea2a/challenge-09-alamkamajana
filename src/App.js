import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import contacts from "./data/contacts.json";

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
const Components = contacts.map((contact, idx) => {
  return <Contact data={contact} key={idx} />;
});

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {Components}
    </div>
  );
}

export default App;
