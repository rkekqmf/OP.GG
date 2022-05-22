import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  const API_URL = `https://ddragon.leagueoflegends.com/cdn/12.9.1/data/ko_KR/champion/${id}.json`;

  const getData = () => {
    if (id !== undefined)
      axios
        .get(API_URL)
        .then((res) => {
          setItem(Object.values(res.data.data)[0]);
        })
        .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return <Item item={item} />;
};

export default Post;
