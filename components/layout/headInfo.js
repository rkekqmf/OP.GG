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
  title: "포트폴리오-서성용",
  keyword: "포트폴리오",
  contents: "포트폴리오 사이트 구현",
};

export default HeadInfo;
