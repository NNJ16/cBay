import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Input} from "reactstrap";

const useStyles = makeStyles({
    root: {
        maxWidth:340,
    },
    media: {
        height: 200,
    },
    qty: {
        width: 60,
    },
    addTo:{
        margin: "auto auto"
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root && "card"}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image="https://mingo.lk/wp-content/uploads/2020/09/web-6.jpg"
                    height="200"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.addTo}>
                <Typography gutterBottom component="h2">
                    QTY :
                </Typography>
                <Input className={classes.qty} size="sm" type="number" required="true"/>
                <Button size="small" variant="contained" color="primary">
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    );
}