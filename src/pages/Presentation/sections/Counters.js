/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import axios from "axios";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { useEffect, useState } from "react";
// import axios from "axios";

function Counters() {
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const [stat3, setStat3] = useState(0);
  useEffect(() => {
    axios
      .get("https://cms.lidaverse.com/items/data_download?aggregate[count]=id")
      .then((res) => {
        console.log(res.data.data[0].count.id);
        setStat1(parseInt(res.data.data[0].count.id ?? "0", 10));
      });
    axios
      .get("https://cms.lidaverse.com/items/classes?aggregate[count]=id")
      .then((res) => {
        console.log(res.data.data[0].count.id);
        setStat2(parseInt(res.data.data[0].count.id ?? "0", 10)); 
      });
    axios
      .get(
        "https://cms.lidaverse.com/items/pcd_instance?aggregate[count]=id&filter[status][_eq]=published"
      )
      .then((res) => {
        console.log(res.data.data[0].count.id);
        setStat3(parseInt(res.data.data[0].count.id ?? "0", 10));
      });
  }, []);
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={stat1}
              suffix="+"
              title="Files Downloaded"
              description="You can download the files in .zip format"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
            />
            <DefaultCounterCard
              count={stat2}
              suffix="+"
              title="Labeled Files"
              description="Various Labeled type files are available"
            />
            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" }, ml: 0 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={stat3}
              title="Instance Objects"
              description="You can download individual objects in .pcd format"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
