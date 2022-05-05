import { Client } from "@notionhq/client"
import React from "react"

const notion = new Client({auth: process.env.NEXT_PUBLIC_TOKEN_NOTION})
const databaseId = process.env.NEXT_PUBLIC_ID_DATABASE

export const makeRandomId= (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 return result;
}

//PETICIONES A LA API
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

//FUNCIONES DE RENDERIZADO
const getAtributtes = (atributtes) => {
  const { bold, code, color, italic, strikethrough, underline } = atributtes
  return `font-weight: ${bold && 700}; text-decoration: ${underline && 'underline'}; color: ${color}; font-style: ${italic && 'italic'} `
}
const renderContentBlock = (value) => {
  return value.map(item => {
    return item.href ? <a key={makeRandomId(4)} href={item.href} target="_blank">{item.plain_text}<style jsx>{`span { ${getAtributtes(item.annotations)}}`}</style></a>
    : <span key={makeRandomId(4)}>{item.plain_text}<style jsx>{`span { ${getAtributtes(item.annotations)}}`}</style></span> 
    })
}
const addItem = (value, children, has_children, list) => {
  const itemList = []
  itemList.push({children: children, has_children: has_children, annotations: {}})
  value.rich_text.map(item => itemList.push({plain_text: item.plain_text, href: item.href, children: children, annotations: item.annotations})) 
  list.push(itemList)
}
const renderList = (listComplete) => {
  return <>
  {listComplete.map(item => {
    const children =  item[0].children
    return (
    <>
    <li className="father" key={makeRandomId(4)}>
      <span>{renderContentBlock(item)}</span>
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
  </>
}

//RENDERIZADO DE PAGINA
export const renderBlock = (block, nextItem) => {
  const { type, id, has_children, children } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (  
        <div className="father" key={id}> 
          <p>{renderContentBlock(value.rich_text)}</p>
          {has_children && children?.map(item => {
          return <div className="embebed">
            {renderContentBlock(item[type].rich_text)}
          </div>
          })}
        </div>    
      );
    case "heading_1":
      return (
        <h1 key={id}>
          {renderContentBlock(value.rich_text)}
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={id}>
          {renderContentBlock(value.rich_text)}
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={id}>
          {renderContentBlock(value.rich_text)}
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      let list = []
      if (nextItem) {
        addItem(value, children, has_children, list)
        break
      }else {
        addItem(value, children, has_children, list)
        const listComplete = list
        list = []
        if(type === "bulleted_list_item") {
          return (
            <ul key={id} className="father">
              {renderList(listComplete)}
            </ul>
          )
        } else {
          return (
            <ol key={id} className="father">
              {renderList(listComplete)}
           </ol>
          )
        }       
      };
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />
            <span>{renderContentBlock(value.rich_text)}</span>
          </label>
        </div>
      );
    case "image":
      const src =
      value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? renderContentBlock(value.caption) : "";
      const captionUrl = value.caption ? value.caption[0]?.text.link?.url : "";
      return (
        <figure key={id} className="image-container">
          <img src={src} alt={caption} className="image-post"/>
          {caption && <figcaption className="caption">{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return (
      <blockquote key={id}>{renderContentBlock(value.rich_text)}</blockquote>
      );
    case "toggle":
     console.log(children)
      return (
        <details>
          <summary>
            {renderContentBlock(value.rich_text)}
          </summary>
          {has_children && children?.map(item => {
          return <div className="embebed">
            {console.log(children)}
            {renderBlock(item)}
          </div>
          })}
        </details>
      );
    case "code":
      return (
        <pre>
          <code key={id}>
            {renderContentBlock(value.rich_text)}
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
