import React, { Component } from 'react';
import './work.css';

import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    CardActions,
    Typography,
    Button,
    withStyles
} from '@material-ui/core';

// let divStyle, sectionStyle;

const styles = ({ spacing: { unit } }) => ({
    root: {
        maxWidth: 300,
        maxHeight:400
    },
})



export default withStyles(styles)(class Work extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root+" work"}>
                <CardActionArea component="a" href={this.props.href}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        Height="140"
                        image={this.props.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography style={{display: 'flex'}} gutterBottom variant="h5" component="h2">
                            {this.props.name}
                        </Typography>
                        <Typography style={{display: 'flex'}} variant="body2" color="textSecondary" component="p">
                            介绍
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button side="small" color="primary" component="a" href={this.props.href}>
                        Preview
                    </Button>
                </CardActions>

            </Card>
        );
    }
})
// <Card className="work" >
//     <a href={props.href} className="workLink">
//         <div style={sectionStyle} onMouseEnter={(e) => mOver(e)} >
//             <div style={divStyle}>
//                 {props.name}
//             </div>
//         </div>
//     </a>
// </Card>

{/* 
<Card className={useStyles.root}>
    <CardActionArea>
        <CardMedia
            className={classes.media}
            image="https://aboutmeone.vercel.app/image/workImage/CarRental.png"
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
    <CardActions>
        <Button size="small" color="primary">
            Share
        </Button>
        <Button size="small" color="primary">
            Learn More
        </Button>
    </CardActions>
</Card> 
*/}




// 2.0

{/* <Card className={useStyles.root}>
                <CardActionArea>
                    <CardMedia
                        className={useStyles.media}
                        image="https://aboutmeone.vercel.app/image/workImage/CarRental.png"
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
            </Card> */}