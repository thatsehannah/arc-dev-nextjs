import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import {
  Grid,
  Typography,
  Hidden,
  useTheme,
  makeStyles,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5rem",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  paragraphContainer: {
    maxWidth: "20em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Stunning Custom Website Design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering, and perfect responsive design | 99% PageSpeed Score"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the Midwest | Websites"
        />
        <meta
          property="og:url"
          key="og:url"
          content="arc.com/websites" //come back here and change this link after deployment
        />
        <link rel="canonical" key="canonical" href="arc.com/websites" />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              disableRipple
              component={Link}
              href="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <img
                alt="back to mobile apps development page"
                src="/assets/backArrow.svg"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              disableRipple
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/services"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
              }}
            >
              <img
                alt="forward to Services page"
                src="/assets/forwardArrow.svg"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/*-----Analytics-----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/analytics.svg"
                alt="graph with magnifying glass"
                style={{ marginLeft: "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography align={matchesSM ? "center" : undefined} variant="body1">
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      {/*-----E-Commerce-----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify="flex-end"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="world outline made of dollar signs"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            It’s no secret that people like to shop online.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      {/*-----Outreach-----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/outreach.svg" alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.paragraphContainer} item>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      {/*-----Search Engine Optimization-----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify="flex-end"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Engine
                <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="computer with google medallion in first place"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            If you're like use, probably never.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Customers don't go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
