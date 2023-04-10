import { Container } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Header from "../components/Header";
import axios from 'axios';

function Metrics() {

  const[isLogged, setIsLogged] = useState(false);
  console.log(localStorage)
  useEffect(()=>{
      check();
  },[isLogged]);
  const check =() =>{
      if(localStorage.getItem("user") == 'false'){
        setIsLogged(false);
        return;
      }
      else{
        setIsLogged(true);
      }
      return;
    }
    const token = 'eyJrIjoiUzl4VlQzdU9vbHJiM2pCQXllQXFJc2ExMVNKUDNKV3YiLCJuIjoiTk1LZXkiLCJpZCI6MX0=';
    const headers = {
      Authorization: `Bearer ${token}`
    };
    
    axios.get('https://dsoh010.grafana.net/api/dashboards/home', { headers })
      .then(response => {
        // Handle successful response
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
    
  const grafanaRef = useRef();

  useEffect(() => {
    const url =
      "https://dsoh010.grafana.net/d/AEbrOO2Mz/usage-insights-2-data-sources?orgId=1&from=1680873215542&to=1680959615542";
    const grafanaScript = document.createElement("script");
    grafanaScript.src =
      "https://dsoh010.grafana.net/d/AEbrOO2Mz/usage-insights-2-data-sources?orgId=1&from=1680873215542&to=1680959615542";
    grafanaScript.onload = () => {
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.frameBorder = "0";
      iframe.width = "100%";
      iframe.height = "100%";
      grafanaRef.current.appendChild(iframe);
    };
    document.body.appendChild(grafanaScript);
    return () => {
      document.body.removeChild(grafanaScript);
    };
  }, []);

  return (
    <>
      {isLogged ? <Navbar/>: <Header/>}
      <Container ref={grafanaRef} height="100vh" />
      <Footer />
    </>
  );
}

export default Metrics;
