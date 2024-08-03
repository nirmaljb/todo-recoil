import { useRecoilState } from "recoil"
import { filteredList, todoFilterState } from "../store/atoms/data"

export function FilterSection() {
    const [filter, setFilter] = useRecoilState(todoFilterState)

    return <div>
        <label htmlFor="filter">Filter</label>
        <input type="text" id="filter" onChange={(e) => setFilter(e.target.value)} value={filter}/>
    </div>
}