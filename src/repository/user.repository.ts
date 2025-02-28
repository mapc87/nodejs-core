import db from '@configuration/db'

export const dbGetUser = async (email: string) => {
    const sqlQuery = `SELECT 
                        u.id_user as idUser,
                        u.name as name,
                        u.email as email,
                        u.password
                    FROM 
                        user u
                    WHERE
                        u.email = '${email}'
                    `
    const [rows]:any = await db.query(sqlQuery)
    console.log(rows)
    return rows
}