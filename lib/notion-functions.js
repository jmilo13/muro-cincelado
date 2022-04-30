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

export async function getContentPost(id) {
  try {
    const data = await notion.blocks.children.list({block_id: id})

    await Promise.all(data.results.map(async item => {
      if(item.has_children){
        const children = await notion.blocks.children.list({block_id: item.id})
        item.children = children.results
      }
    })) 

  return data
  
  }catch (error) { 
    console.error(`Ocurrio un error: ${error.message}`)
  }
} 

const getAtributtes = (atributtes) => {
  const { bold, code, color, italic, strikethrough, underline } = atributtes
  return `font-weight: ${bold && 700}; text-decoration: ${underline && 'underline'}; color: ${color}; font-style: ${italic && 'italic'} `
}

let list = []
export const renderBlock = (block, nextItem) => {
  const { type, id, has_children, children } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (  
        <p className="father" key={id}> 
          {value.rich_text.map(text => {
            return text.href ? <a href={text.href} target="_blank">{text.plain_text}<style jsx>{`span { ${getAtributtes(text.annotations)}}`}</style></a>
            : <span>{text.plain_text}<style jsx>{`span { ${getAtributtes(text.annotations)}}`}</style></span> 
            })}
            {has_children && children?.map(item => {
            return <p className="embebed">
              {item[type].rich_text.map(text => {
                return text.href ? <a href={text.href} target="_blank">{text.plain_text}<style jsx>{`span { ${getAtributtes(text.annotations)}}`}</style></a>
                : <span>{text.plain_text}<style jsx>{`span { ${getAtributtes(text.annotations)}}`}</style></span> 
                })} 
            </p>
            })}
        </p>    
      );
    case "heading_1":
      return (
        <h1 key={id}>
          {value.rich_text[0]?.plain_text}
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={id}>
          {value.rich_text[0]?.plain_text}
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={id}>
          {value.rich_text[0]?.plain_text}
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      if (nextItem) {
        const itemList = []
        itemList.push({children: children, has_children: has_children, styles: {}})
        value.rich_text.map(item => itemList.push({text: item.plain_text, url: item.href, styles: item.annotations})) 
        list.push(itemList)
        break
      }else {
        const itemList = []
        itemList.push({children: children, has_children: has_children, styles: {}})
        value.rich_text.map(item => itemList.push({text: item.plain_text, url: item.href, children: children, styles: item.annotations}))
        list.push(itemList)
        const listComplete = list
        list = []
        if(type === "bulleted_list_item") {
          console.log(listComplete)
          return (
            <ul className="father" key={id}>
              {listComplete.map(item => {
                const children =  item[0].children
                return (
                <>
                <li className="father" key={item.id}><span>{item.map(subItem =>{console.log(subItem.styles); return <span>{subItem.url?<a href={subItem.url} target="_blank">{subItem.text}</a> : <span>{subItem.text}</span>}<style jsx>{`span, a { ${getAtributtes(subItem.styles)}}`}</style></span>})}</span>
                { item[0].has_children &&
                  children?.map(subItem => {
                  const next = children[children.indexOf(subItem)+1]?.type === subItem.type
                  return renderBlock(subItem, next)
                  })
                }
                </li> 
                </>
                )
                
              })}
              {listComplete[0].has_children && listComplete[0].children.map(item => {
                const next = children[children.indexOf(item)+1]?.type === item.type
                return renderBlock(item, next)
                })
              }
            </ul>
          )
        } else {
          return (
            <ol key={id}>
              {listComplete.map(item => {
                const children =  item[0].children
                return (
                <>
                <li className="father" key={item.id}><span>{item.map(subItem =>{console.log(subItem.styles); return <span>{subItem.url?<a href={subItem.url} target="_blank">{subItem.text}</a> : <span>{subItem.text}</span>}<style jsx>{`span, a { ${getAtributtes(subItem.styles)}}`}</style></span>})}</span>
                { item[0].has_children &&
                  children?.map(subItem => {
                  const next = children[children.indexOf(subItem)+1]?.type === subItem.type
                  return renderBlock(subItem, next)
                  })
                }
                </li> 
                </>
                )
                
              })}
              {listComplete[0].has_children && listComplete[0].children.map(item => {
                const next = children[children.indexOf(item)+1]?.type === item.type
                return renderBlock(item, next)
                })
              }
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
      const captionUrl = value.caption ? value.caption[0]?.text.link?.url : "";
      return (
        <figure key={id} className="image-container">
          <img src={src} alt={caption} className="image-post"/>
          {caption && <figcaption className="caption"><a href={captionUrl} target="_blank">{caption}</a></figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return (
      <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>
      )
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
