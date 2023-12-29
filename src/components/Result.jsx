export default function Result(pros) {
    const box=pros.movies.map(
        (item)=>{
            return <Box poster_path={item.poster_path} original_title={item.original_title} vote_average={item.vote_average}/>
        }
    )
    return (
        <div className="w-full grid md:grid-cols-4  gap-10 mt-5">
           {box}
        </div>
    )
}

const Box = (props) => {
    const image_path="https://image.tmdb.org/t/p/original"
    return (
        <div className="shadow min-h-[170px] border border-black">
            <img src={image_path+props.poster_path} className="w-full"/>
            <div className="flex justify-between px-2">
                <span>{props.original_title}</span>
                <span className="font-bold text-amber-500">{props.vote_average}</span>
            </div>
        </div>
    )
}