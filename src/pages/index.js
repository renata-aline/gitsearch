import React, { useEffect, useState } from "react";

import { getUserGithub } from "../services/api";

import Container from "../components/Container";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Card from "../components/Card";
import Warning from "../components/Warning";
const Home = () => {
  const [search, setSearch] = useState("");
  const [listResult, setListResult] = useState([]);

  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (search) {
      getUserGithub(search)
        .then((data) => {
          if (data.id) {
            setListResult([data]);
            setError(false);
          } else {
            setError(true);
          }
        })
        .catch((error) => {
          setError(true);
          setListResult([]);
        });
    } else {
      setError(false);
      setListResult([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <Container>
      <Logo />

      <Search result={setSearch} placeholder="Digite um usuário do GitHub" />

      {listResult.map((item) => (
        <Card
          avatarSize={200}
          key={item.id}
          avatar={item.avatar_url}
          title={item.name}
          description={item.bio}
          ProfileLink={item.html_url}
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
