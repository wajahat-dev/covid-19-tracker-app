import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import Countup from 'react-countup'
import cx from 'classnames'

const Cards = (props) => {
    if (!props.data.confirmed) {
        return "loading...."
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} md={3} xs={12} className={cx((styles.card, styles.infected))}>
                    <CardContent>
                        <Typography color="textSecondary" >Infected</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={props.data.confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx((styles.card, styles.recovered))}>
                    <CardContent>
                        <Typography color="textSecondary" >Recovered</Typography>
                        <Typography variant='h5'><Countup start={0} end={props.data.recovered.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered cases of COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx((styles.card, styles.death))}>
                    <CardContent>
                        <Typography color="textSecondary" >Death</Typography>
                        <Typography variant='h5'><Countup start={0} end={props.data.deaths.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Death cases of COVID-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    );
}

export default Cards;
