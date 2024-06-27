"use client";

export default function List({postData}) {
  return (
    <ul className="mt-4 flex flex-wrap gap-[10px] md:gap-5">
      {postData.length > 0 ? postData.map(({permalink,media_url,caption,media_type,children}, index) => (
        <li className="w-[calc(50%-5px)] md:w-[calc(25%-15px)]" key={index}>
          {media_type === "IMAGE" && <a href={permalink} target='_blank'><img src={media_url} className="w-full" /></a>}
          {media_type === "VIDEO" && <video controls className="w-full" src={media_url}></video>}
          {media_type === "CAROUSEL_ALBUM" && 
            <a href={permalink} target='_blank'><img src={children.data[0].media_url} className="w-full" /></a>
          }
          <p>{caption}</p>
        </li>
      )) : 'Loading...'}
    </ul>
  );
}