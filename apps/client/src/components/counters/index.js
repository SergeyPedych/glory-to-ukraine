import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "../../ui/components/MKBox";
import DefaultCounterCard from "../../ui/components/MKCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={50}
              suffix="+"
              title="Thousands"
              description="Estimated number of casualties in Ukraine"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={4}
              suffix="+"
              title="Million"
              description="Refugees who left their homes"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={280}
              title="Miles"
              description="Length of the front line"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
