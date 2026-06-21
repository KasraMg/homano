import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const inputKeyDownHandler = (event: any) => {
        if (event.code == "Enter" && value) {
            navigate(`/shop?name=${value}`)
        }
    }

    const iconClickHandler = () => {
        if (value) {
            navigate(`/shop?name=${value}`)
        }
    }
    return (
        <div className='pt-10 w-max mx-auto'>
            <h2 className="w-[57.5] text-xl md:text-3xl text-center tracking-hero transition-all">
                بهترین قیمت و تنوع لوازم خانگی در هومانو
            </h2>
            <div className="relative mt-4 w-max">
                <input value={value} onChange={e => setValue(e.target.value)} onKeyDown={inputKeyDownHandler} type="text" placeholder="کالای مورد نظر را جستجو کنید..." className="py-2 h-14 w-full md:!w-[650px] pl-12 pr-3 outline-0 rounded-lg border border-neutral-03 placeholder:text-gray-400" />
                <SearchIcon onClick={iconClickHandler} className="absolute left-3 top-4 cursor-pointer" />
            </div>
        </div>
    )
}

export default Search