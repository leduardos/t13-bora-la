import "./App.css";
import Main from "./components/Main";
import Profile from "./components/Profile";

const App = () => {
  const profiles = [
    {
      name: "Tsunode",
      age: 24,
    },
    {
      name: "Alex",
      age: 32,
    },
    {
      name: "Vilson",
      age: 23,
    },
    {
      name: "Wesley",
      age: 23,
    },
  ];

  console.log('teste')

  return (
    <Main>
      <h1>Teste</h1>

      {profiles.map((profile, index) => 
        <Profile key={index} name={profile.name} age={profile.age}>
          <button type="button">Editar</button>
        </Profile>
      )}
    </Main>
  );
};

export default App;
