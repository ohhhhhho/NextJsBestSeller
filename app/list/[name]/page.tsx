import { Suspense } from "react"
import BookDetail, { getDetails } from "../../../components/bookDetail"

export async function generateMetadata({ params}: {params: Promise<{ name: string }>}) {
    const {name} = await params
    const book = await getDetails(name)
    return {
        title:book.results.list_name
    }
}

export default async function Detail({params}:{params: Promise<{ name: string }>}){
    const {name}  = await params
    return(
        <>
        <Suspense fallback="Loading">
            <BookDetail name={name}/>
        </Suspense>
        </>
    )
}