import Image from "next/image";
import Link from "next/link";
import HeadInfo from "../components/HeadInfo";

const photos = ({ photos }) => {
  return (
    <div>
      <HeadInfo title="뽀토" />
      <h1>My Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  src={photo.url}
                  width={100}
                  height={100}
                  alt={photo.title}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export default photos;
