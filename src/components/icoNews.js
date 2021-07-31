import React from "react";
import bitcoin from "../assets/bitcoin.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="container py-7">
      <h1 className="text-light" style={{ textAlign: "center" }}>
        ICO CRYPTO NEWS
      </h1>
      <div className="row ">
        <Card
          style={{ background: "#2d2a40", marginBottom: 23 }}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={bitcoin}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="text-light"
              >
                Bitcoin
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="cardp"
              >
                We’ve built a platform to do well out of stakeholders. SIF TOKEN
                is a SIFIRINCIFILO initiative that takes its power from binance
                smart chain...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button> */}
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{ background: "#2d2a40", marginBottom: 23 }}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={bitcoin}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="text-light"
              >
                Bitcoin
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="cardp"
              >
                We’ve built a platform to do well out of stakeholders. SIF TOKEN
                is a SIFIRINCIFILO initiative that takes its power from binance
                smart chain...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button> */}
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{ background: "#2d2a40", marginBottom: 23 }}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={bitcoin}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="text-light"
              >
                Bitcoin
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="cardp"
              >
                We’ve built a platform to do well out of stakeholders. SIF TOKEN
                is a SIFIRINCIFILO initiative that takes its power from binance
                smart chain...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button> */}
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
