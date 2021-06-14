import { IncomingMessage, ServerResponse } from 'http'
import Database from '/Users/camil/Desktop/proyects/muroCinceladoReact/database/db'

const allPosts = async (request = IncomingMessage, response = ServerResponse) => {
    const slug = request.query.slug
    const db = new Database()
    const entry = await db.getBySlug(slug)
    response.status(200).json({data:entry})
}

export default allPosts