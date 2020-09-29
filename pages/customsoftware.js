import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import Lottie from "react-lottie";
import {
  Grid,
  Hidden,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";

import CallToAction from "../src/ui/CallToAction";

import documentsAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data";
import automationAnimation from "../src/animations/automationAnimation/data";
import uxAnimation from "../src/animations/uxAnimation/data";

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
  itemContainer: {
    maxWidth: "40em",
  },
}));

const CustomSoftware = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the Midwest | Custom Software Development"
        />
        <meta
          property="og:url"
          key="og:url"
          content="arc.com/customsoftware" //come back here and change this link after deployment
        />
        <link rel="canonical" key="canonical" href="arc.com/customsoftware" />
      </Head>
      {/*-----Section 1-----*/}
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
              href="/services"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
              }}
            >
              <img alt="back to services page" src="/assets/backArrow.svg" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h1"
              style={{
                lineHeight: matchesXS && 1.1,
                marginBottom: matchesXS && "0.5em",
                fontSize: "2.25em",
              }}
            >
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              disableRipple
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <img
                alt="forward to iOS/Android App Development page"
                src="/assets/forwardArrow.svg"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/*-----Section 2-----*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      {/*-----Section 3-----*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? "center" : "space-between"}
        className={classes.rowContainer}
        style={{ display: matchesMD ? "grid" : undefined }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4">
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM && "2em" }}>
            <Lottie
              options={documentsOptions}
              isStopped={false}
              style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md style={{ marginBottom: matchesSM && "2em" }}>
            <Lottie
              options={scaleOptions}
              style={{ maxWidth: 280, maxHeight: 260 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : "right"} variant="h4">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*-----Section 4-----*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ marginTop: "20em", marginBottom: "20em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src="/assets/root.svg"
              alt="tree with roots extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*-----Section 5-----*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? "center" : "space-between"}
        style={{ display: matchesMD ? "grid" : undefined }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4">
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Why waste time when you don’t have to?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM && "2em" }} >
            <Lottie
              options={automationOptions}
              isStopped={false}
              style={{ maxWidth: 280, maxHeight: 290 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md style={{ marginBottom: matchesSm && "2em" }}>
            <Lottie
              options={uxOptions}
              style={{ maxWidth: 155, maxHeight: 310 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : "right"} variant="h4">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "20em" }}>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
