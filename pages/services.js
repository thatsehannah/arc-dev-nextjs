import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Top Custom Software Development Services | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the Midwest | Services"
        />
        <meta
          property="og:url"
          key="og:url"
          content="arc.com/services" //come back here and change this link after deployment
        />
        <link rel="canonical" key="canonical" href="arc.com/services" />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h1"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {" "}
        {/*-----iOS/Android App Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone{" "}
              {matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button
              component={Link}
              href="/mobileapps"
              className={classes.learnButton}
              variant="outlined"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 8 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid item>
          {" "}
          {/*-----Custom Software Block-----*/}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solution, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                component={Link}
                href="/customsoftware"
                className={classes.learnButton}
                variant="outlined"
              >
                <span style={{ marginRight: 8 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="custom software icon"
                src="/assets/customSoftware.svg"
              />
            </Grid>
          </Grid>
        </Grid>{" "}
        {/*-----Websites Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, {matchesXS && <br />}built for
              speed.
            </Typography>
            <Button
              component={Link}
              href="/websites"
              className={classes.learnButton}
              variant="outlined"
              onClick={() => {
                props.setValue(5);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 8 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="websites icon"
              src="/assets/websiteIcon.svg"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
