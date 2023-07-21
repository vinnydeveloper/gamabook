export default function createTimestamp(date?: Date) {

  const currentDate = date ?? new Date()

  return {
    created_at: currentDate.toISOString(),
    updated_at: currentDate.toISOString(),
  }
}