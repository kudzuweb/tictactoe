import { api } from './api'

export const getGame = async (id: string) => {
    const res = await api.get(`/games/${id}`)
    return res.data
}

export const postMove = async (id: string, index: number) => {
    const res = await api.post(`/games/${id}/moves`, { index })
    return res.data
}

export default { getGame, postMove }