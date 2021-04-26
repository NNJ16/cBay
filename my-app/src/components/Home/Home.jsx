import React from "react";
import Card from "../Card/card";
import {Grid} from "@material-ui/core";

export default function Home(){
    return(
        <div className="itemList">
            <Grid container spacing={1}>
                <Grid container item xs={4} >
                    <Card/>
                </Grid>
                <Grid container item xs={4} >
                    <Card/>
                </Grid>
                <Grid container item xs={4} >
                    <Card/>
                </Grid>
                <Grid container item xs={4} >
                    <Card/>
                </Grid>
            </Grid>
        </div>
    );
}