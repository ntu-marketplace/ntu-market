import { Container, Show } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import axios from 'axios';

function MongoMetrics() {

  return (
    <>
      <Navbar />
      <Show above='620px'>
        <iframe src="https://charts.mongodb.com/charts-ntu-marketplace-jshfc/dashboards/643247c5-a14d-41a2-89a9-0ae2a18d35d4" width="100%" height="800" frameborder="0"></iframe>
      </Show>
      <Show below='620px'>
        <Container height="100vh" width="100vw">
          <iframe src="https://charts.mongodb.com/charts-ntu-marketplace-jshfc/dashboards/643247c5-a14d-41a2-89a9-0ae2a18d35d4" width="100%" height="800" frameborder="0"></iframe>
        </Container>
      </Show>

      <Footer />
    </>
  );
}

export default MongoMetrics;
