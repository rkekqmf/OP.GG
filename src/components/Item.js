const Item = ({ item }) => {
  if (item !== null)
    return (
      <div>
        <span>{item.name}</span>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${item.image.full}`}
        />
        잔디심기 테스트
      </div>
    );
};

export default Item;
