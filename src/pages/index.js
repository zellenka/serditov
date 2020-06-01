import React from "react";
import { Title, Link, Meta } from "react-head";
import Layout from '../components/layout'

const Seo = () => (
  <>
    <Title>Serditov architect</Title>
    <Meta name="description" content="Anton Serditov architect" />
    <Link rel="canonical" content="https://serditov.com/" />
  </>
);

 const Home = ({location}) => {
  return (
    <Layout location={location}> 
      <Seo />
    </Layout>
  );
}

export default Home