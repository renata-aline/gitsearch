import React, { useState } from "react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Card from "../components/Card";
import Warning from "../components/Warning";
const Home = () => {
  const [listResult, setListResult] = useState([
    {
      id: 1,
      name: "João",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      bio: "Programador",
    },
    {
      id: 15285,
      name: "João",
      avatar_url: "https://avatars.githubusercontent.com/u/15285?v=4",
      bio: "Programador",
    },
  ]);

  const [error, setError] = useState(false);

  return (
    <Container>
      <Logo />
      <Search />

      {listResult.map((item) => (
        <Card
          avatarSize={200}
          key={item.id}
          avatar={item.avatar_url}
          title={item.name}
          description={item.bio}
        />
      ))}

      {error && (
        <Warning>
          Nenhum perfil foi encontrado com ese nome de usuário.
          <br />
          Tente novamente
        </Warning>
      )}
    </Container>
  );
};

export default Home;
