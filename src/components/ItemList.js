import { Grid } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';

export default function ItemList({ list }) {
  const keyList = Object.keys(list);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 50 }}
    >
      {keyList.map((keyItem) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={list[keyItem].key}>
            <Link href={`/view/${list[keyItem].id}`}>
              <a>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${list[keyItem].image.full}`}
                  alt={list[keyItem].name}
                />
                <p>{list[keyItem].name}잔디심기 테스트</p>
              </a>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
