import { Grid } from "@material-ui/core";
import ContentCard from "./ContentCard";
import ItemList from '../constant';


export default function Content() {

    const getItemListCard = itemListObject => {
        return (
            <Grid item xs={12} sm={4}>
                <ContentCard {...itemListObject} />
            </Grid>
        )
    }

    return (
        <Grid container spaccing={2}>
            {ItemList.map(itemListObject => getItemListCard(itemListObject))}
        </Grid>
    );
}