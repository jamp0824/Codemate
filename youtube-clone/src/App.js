import youtubeData from "./data/youtubeData.json";

function App() {
  console.log("id :", "\n", youtubeData["data"][5].id, " -> 영상의 링크 주소");
  console.log("title :", "\n", youtubeData["data"][5].title, " -> 영상의 제목");
  console.log(
    "date :",
    "\n",
    youtubeData["data"][5].date,
    " -> 영상의 업로드 된 시간"
  );
  console.log(
    "channelId :",
    "\n",
    youtubeData["data"][5].channelId,
    " -> 영상의 체널 링크 주소"
  );
  console.log(
    "thumbnail :",
    "\n",
    youtubeData["data"][5].thumbnail,
    " -> 영상의 썸네일"
  );
  console.log(
    "description :",
    "\n",
    youtubeData["data"][5].description,
    " -> 영상의 설명"
  );
  console.log(
    "channelTitle :",
    "\n",
    youtubeData["data"][5].channelTitle,
    " -> 영상의 체널 이름"
  );
  console.log(
    "category :",
    "\n",
    youtubeData["data"][5].category,
    " -> 영상의 링크 주소"
  );
  console.log(
    "viewCount :",
    "\n",
    youtubeData["data"][5].viewCount,
    " -> 영상의 카테고리"
  );
  console.log(
    "likeCount :",
    "\n",
    youtubeData["data"][5].likeCount,
    " -> 영상의 좋아요 갯수"
  );
  console.log(
    "channelUrl :",
    "\n",
    youtubeData["data"][5].channelUrl,
    " -> 영상의 채널 링크 주소"
  );
  console.log(
    "channelThumbnail :",
    "\n",
    youtubeData["data"][5].channelThumbnail,
    " -> 영상의 채널 썸네일"
  );
  return <div> 리액트로 데이터를 불러오기 </div>;
}

export default App;
