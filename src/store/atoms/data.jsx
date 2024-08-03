import { atom, selector } from "recoil"

export const data = atom({
    key: 'dataAtom',
    default: []
})

export const todoFilterState = atom({
    key: 'filterStateAtom',
    default: ''
})

export const filteredList = selector({
    key: 'filteredListAtom',
    get: ({get}) => {
        const filter = get(todoFilterState)
        const listToBeFiltered = get(data)

        return listToBeFiltered.filter(list => list.title.includes(filter))

    }
})
