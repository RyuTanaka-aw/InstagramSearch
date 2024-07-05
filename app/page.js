import Main from '/components/main';

const instaBusinessId = process.env.instaBusinessId;
const accessToken = process.env.accessToken;
const url = `https://graph.facebook.com/v13.0/${instaBusinessId}/media?fields=id,caption,children{id,media_url,media_type},media_type,media_url,permalink,timestamp,username,thumbnail_url&limit=50&access_token=${accessToken}`

// 投稿データを取得
async function getPostData(url, newData = []) {
  try {
    const response = await fetch(url, { next: { revalidate: 10 } });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 取得したデータをjson形式に変換
    const json = await response.json();

    // 取得したデータを配列に追加
    newData = newData.concat(json.data);
    
    // ページネーションがある場合
    if(json.paging && json.paging.next) {
      return await getPostData(json.paging.next, newData);
    }

    return newData;
  } catch(error) {
    console.error(error);
    return null;
  }
}


export default async function Home() {
  const postData = await getPostData(url);
  
  return (
    <div className='p-5'>
      <Main postData={postData} />
    </div>
  );
}

export const metadata = {
  title: 'Instagram App',
}
