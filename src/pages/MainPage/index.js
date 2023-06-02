import React from "react";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Row from "../../components/Row";
import styled from "styled-components";
import requests from "../../api/request";

const MainPage = () => {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row title="최신 영화" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="평점 높은 순" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="액션 영화" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="코미디 영화" id="CM" fetchUrl={requests.fetchComedyMovies} />
    </Container>
  );
}

export default MainPage

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`