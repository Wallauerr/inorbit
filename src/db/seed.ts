import { client, db } from "."
import { goalCompletions, goals } from "./schema"

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  await db.insert(goals).values([
    { title: 'Exercise', desiredWeeklyFrequency: 3 },
    { title: 'Read a book', desiredWeeklyFrequency: 5 },
    { title: 'Make a goal', desiredWeeklyFrequency: 2 },
  ])
}

seed().finally(() =>{
  client.end()
})