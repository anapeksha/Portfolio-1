import React from "react";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";
import { Typography, Card, CardContent, styled } from "@mui/material";

const Countup = () => {
    const CustomCard = styled(Card)({
        '&:hover': {
            backgroundColor: "#ce93d8",
            color: "black"
        }
    })
    return (
        <>
            <Grid xs={6} md={3} xl={3} item>
                <CustomCard>
                    <CardContent><Typography fontSize="1.3em">
                        <div style={{ fontSize: "3em" }}><CountUp start={0} end={40} duration={5} enableScrollSpy useEasing/>+</div> brands
                    </Typography></CardContent></CustomCard>

            </Grid>
            <Grid xs={6} md={3} xl={3} item>
                <CustomCard>
                    <CardContent>
                        <Typography fontSize="1.3em">
                            <div style={{ fontSize: "3em" }}><CountUp start={0} end={95} duration={5} enableScrollSpy useEasing/>%</div> client retention
                        </Typography>
                    </CardContent>
                </CustomCard>
            </Grid>
            <Grid xs={6} md={3} xl={3} item>
                <CustomCard>
                    <CardContent><Typography fontSize="1.3em">
                        <div style={{ fontSize: "3em" }}><CountUp start={0} end={25} duration={5} enableScrollSpy useEasing/>+</div> projects delivered
                    </Typography>
                    </CardContent></CustomCard>
            </Grid>
            <Grid xs={6} md={3} xl={3} item>
                <CustomCard>
                    <CardContent>
                        <Typography fontSize="1.3em">
                            <div style={{ fontSize: "3em" }}><CountUp start={0} end={5} duration={5} enableScrollSpy useEasing/>+</div> years of market experience
                        </Typography>
                    </CardContent></CustomCard>
            </Grid>
            <Grid xs={6} md={3} xl={3} item><CustomCard>
                <CardContent>
                    <Typography fontSize="1.3em">
                        <div style={{ fontSize: "3em" }}><CountUp start={0} end={90} duration={5} enableScrollSpy useEasing/>%</div> increase in brand reach
                    </Typography>
                </CardContent></CustomCard>
            </Grid>
            <Grid xs={6} md={3} xl={3} item>
                <CustomCard>
                    <CardContent>
                        <Typography fontSize="1.3em">
                            <div style={{ fontSize: "3em" }}><CountUp start={0} end={10} duration={5} enableScrollSpy useEasing/>+</div> international client base
                        </Typography>
                    </CardContent></CustomCard>
            </Grid>
            <Grid xs={6} md={3} xl={3} item>
                <CustomCard>
                    <CardContent>
                        <Typography fontSize="1.3em">
                            <div style={{ fontSize: "3em" }}><CountUp start={0} end={100} duration={5} enableScrollSpy useEasing/>%</div> LinkedIn impressions
                        </Typography>
                    </CardContent></CustomCard>
            </Grid>
            <Grid xs={6} md={3} xl={3} item>
                <CustomCard>
                    <CardContent>
                        <Typography fontSize="1.3em">
                            <div style={{ fontSize: "3em" }}><CountUp start={0} end={10} duration={5} enableScrollSpy useEasing/>+</div> content collaborations
                        </Typography>
                    </CardContent></CustomCard>
            </Grid>
        </>
    )
}

export default Countup;