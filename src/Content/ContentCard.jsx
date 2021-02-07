import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Avatar, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import { AddCircle, Share } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "20px 40px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    img: {
        height: '200px',
    }
});

export default function ContentCard({ avatarUrl, title, subtitle, description, imageUrl, price  }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar src={avatarUrl} />

                }
                action={
                    <IconButton aria-label="settings">
                        <Share />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                className={classes.img}
                image={imageUrl}
                title="Paella dish"
            />
            <CardContent>
                {description}
            </CardContent>
            <CardActions>
                <IconButton variant="contained" color='secondary' size="small">
                    <AddCircle />
                </IconButton>
                <Button size="small">Comprar</Button>
            </CardActions>
        </Card>
    )
}