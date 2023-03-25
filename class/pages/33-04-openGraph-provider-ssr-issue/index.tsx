// ----------------------------------------------------------------------------------
//  33-04. openGraph-provider-ssr-issue
// ----------------------------------------------------------------------------------

// 제공자일 때 (ex. 네이버)

import { gql, useQuery } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any) {
  // const { data } = useQuery(FETCH_USEDITEM, {
  //   variables: { useditemId: "640f279c1182750028ee7a7a" },
  // });

  return (
    <>
      <Head>
        <meta property="og: title" content={props?.qqq.fetchUseditem.name} />
        <meta
          property="og: description"
          content={props?.qqq.fetchUseditem.remarks}
        />
        <meta
          property="og: image"
          content={props?.qqq.fetchUseditem.images?.[0]}
        />
      </Head>
      {/* 여기는 body이므로 미리보기와는 상관없음! */}
      <div>중고마켓에 오신 것을 환영합니다! </div>

      {/* 이미지 로드가 실패했을 때 어떤 이미지였는지 추측이라도 할 수 있음 */}
      <img src="111111" alt="강아지이미지.jpg" />
    </>
  );
}

// getServerDideProps는 Next.js에서 자체적으로 읽는 단어이므로 임의로 변경 불가
// 여기는 서버에서만 실행됨 (Webpack 프론트엔드 서버프로그램)

export const getServerDideProps = async () => {
  console.log("여기는 서버입니다.");
  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "https://backendonline.codebootcamp.co.kr/graphql"
  );
  const result = await graphQLClient.request(FETCH_USEDITEM, {
    // 여기서는 variables 안씀
    useditemId: "640f279c1182750028ee7a7a",
  });
  console.log("#####", result);

  // 2. 받아온 결과를 return
  return {
    // props는 필수!!! (page에 props로 들어감)
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
