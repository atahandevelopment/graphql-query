import { useState } from "react";

interface PageProps {
    setSearchQuery: Function;
    setSelectedGroup: Function;
    setPage: Function;
    refetch: Function;
}

export default function SearchBar({setSearchQuery, setSelectedGroup, setPage, refetch } : PageProps) {
    const [query, setQuery] =useState<string>("")
    const [size, setSize] = useState<any>(null)
    const [queryPage, setQueryPage] = useState<number>(1)

    let timer : any = null;
    const onSearch = (value: string) => {
        clearTimeout(timer)
      timer = setTimeout(() =>{
            setQuery(value)
            setSize(null)
            setQueryPage(1)
        }, 1000);
    }

    const onSelect = (value: any) => {
        if(value === "all") {
            setSize(null)
        } else {
            setSize(parseInt(value))
        }
    }
    const onSearchPage = (value: any) => {
        setQueryPage(parseInt(value))
    }
    const handleKeyDown = () => {
        setSearchQuery(query)
        setSelectedGroup(size)
        setPage(queryPage)
        refetch();
      };

    
    return (
        <div className="w-full h-auto py-2 flex justify-center gap-8 ">
                <div className="w-1/4">
                        <label>Search Country</label>
                        <input onChange={(e: any) => onSearch(e.target.value)} onKeyDown={handleKeyDown} className="border rounded-md px-4 py-2 w-full h-2/3" type="text" placeholder="Country Name" />
                </div>
                <div className="w-1/12">
                    <label className="w-full">Page Size</label>
                    <select onChange={(e: any) => onSelect(e.target.value)} defaultValue="all" className="border px-2 py-2 rounded-md w-full h-2/3">
                        <option value="all">All Countries</option>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <div className="w-1/12">
                        <label>Enter Page</label>
                        <input onChange={(e: any) => onSearchPage(e.target.value)} className="border rounded-md px-4 py-2 w-full h-2/3" type="text" placeholder="Page" />
                </div>

                <div className="w-1/12 mt-1 flex items-end">
                    <button className="w-full h-2/3 bg-blue-500 text-white rounded-md" onClick={handleKeyDown}>Search</button>
                </div>
            
            
        </div>
    )
}