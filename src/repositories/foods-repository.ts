import Food from '../models/food'
import database from './database'

const foodsRepository = {
    criar: (food: Food, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO foods (name, description, value, category, amountpeople, isavailable) VALUES (?, ?, ?, ?, ?, ?)'
        const params = [food.name, food.description, food.value, food.category, food.amountpeople, food.isavailable]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },

    lerTodos: (callback: (food: Food[]) => void) => {
        const sql = 'SELECT * FROM foods'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback(rows))
    },

    ler: (id: number, callback: (food?: Food) => void) => {
        const sql = 'SELECT * FROM foods WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row) => callback(row))
    },

    apagar: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM foods WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}

export default foodsRepository