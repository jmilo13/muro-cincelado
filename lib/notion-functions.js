//PETICIONES A LA API
import { Client } from "@notionhq/client"

const notion = new Client({auth: process.env.NEXT_PUBLIC_TOKEN_NOTION})
const databaseId = process.env.NEXT_PUBLIC_ID_DATABASE

export async function getAllPosts() {
    try {
      const data = await notion.databases.query({
        database_id: databaseId, 
     })
      return data.results
    }catch (error) { 
      console.error(error)
    }
  } 
export async function getBlock(id) {
  try {
    const data = await notion.blocks.retrieve({
      block_id: id, 
    })

  return data
  
  }catch (error) { 
    console.error(error)
  }
}

export async function getOnePost(id) {
  try {
    const data = await notion.blocks.children.list({
      block_id: id, 
    })

  return data
  
  }catch (error) { 
    console.error(error)
  }
} 



let list = []
export const renderBlock = (block, nextItem) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p key={id}>
          {value.rich_text.map(text => text.plain_text)}
        </p>
      );
    case "heading_1":
      return (
        <h1 key={id}>
          {value.rich_text[0].plain_text}
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={id}>
          {value.rich_text[0].plain_text}
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={id}>
          {value.rich_text[0].plain_text}
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      if (nextItem) {
        list.push(value.rich_text[0].plain_text)
        break
      }else {
        list.push(value.rich_text[0].plain_text)
        const listComplete = list
        list = []
        if(type === "bulleted_list_item") {
          return (
            <ul>
              {listComplete.map(item => <li>{item}</li>)}
            </ul>
          )
        } else {
          return (
            <ol>
              {listComplete.map(item => <li>{item}</li>)}
            </ol>
          )
        }
        
      }
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />
            <span>{value.rich_text[0].plain_text}</span>
          </label>
        </div>
      );
    // case "toggle":
    //   return (
    //     <details>
    //       <summary>
    //         <Text text={value.text} />
    //       </summary>
    //       {value.children?.map((block) => (
    //         <Fragment key={block.id}>{renderBlock(block)}</Fragment>
    //       ))}
    //     </details>
    //   );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      const captionUrl = value.caption ? value.caption[0]?.text.link.url : "";
      return (
        <figure key={id} className="image-container">
          <img src={src} alt={caption} className="image-post"/>
          {caption && <figcaption><a href={captionUrl} target="_blank">{caption}</a></figcaption>}
          <style jsx>
                {`
                .image-container{
                    display: block;
                    width: 100%;
                    max-width: 40rem;
                    margin: auto;
                }
                .image-post {
                    width: 100%
                }
                `}
            </style>
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {value.text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url
      return (
        <a href={ href } target="_brank" className={styles.bookmark}>
          { href }
        </a>
      );
    case "child_page":
      console.error(`ERROR: Hay una pagina en el contenido. ID: ${id}`)
      break
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};
