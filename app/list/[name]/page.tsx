import { Suspense } from "react"
import BookDetail, { getDetails } from "../../../components/bookDetail"
interface IParams {
    params: { name: string };
}
export async function generateMetadata({ params}: IParams) {
    const {name} = await params
    const book = await getDetails(name)
    return {
        title:book.results.list_name
    }
}

export default async function Detail({params}:IParams){
    const {name}  = await params
    return(
        <>
        <Suspense fallback="Loading">
            <BookDetail name={name}/>
        </Suspense>
        </>
    )
}