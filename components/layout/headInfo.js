import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "가장따뜻한색블루.GG",
  keyword: "롤 전적 챔피언 아이템 검색",
  contents: "롤 전적 검색",
};

export default HeadInfo;
