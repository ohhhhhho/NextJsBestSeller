import { Suspense } from "react"
import BookDetail from "../../../components/bookDetail"

export default async function Detail({params}:{params:{name:string}}){
    return(
        <>
        <Suspense fallback="Loading">
            <BookDetail name={params.name}/>
        </Suspense>
        </>
    )
}