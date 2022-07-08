import { useEffect, useState } from "react"

export function SearchForm({ onSetSearch }) {
    const [txt, setTxt] = useState('')

    useEffect(() => {
        onSetSearch(txt)
    }, [txt])

    const handleChange = (ev) => {
        const { value } = ev.target
        setTxt(value)
    }
    
    return(
        <form className="search-form" onSubmit={(ev) => {ev.preventDefault()}}>
            <label> City name </label>
            <input type="text" name="txt" value={txt} onChange={handleChange} autoComplete="off" />
            <button>Check</button>
        </form>
    )
}