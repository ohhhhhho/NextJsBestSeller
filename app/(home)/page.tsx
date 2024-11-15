import Link from "next/link";
import { API_URL } from "../constance"
import { IBookList } from "../type";
import styles from './home.module.css'
export const metadata ={
    title:'Home'
}
async function getBook():Promise<IBookList> {
    const json = await(await fetch(API_URL)).json();
    return json
}
export default async function Home(){
    const movie = await getBook();
    return(
        <>
        <ul className={styles.wrap}>
            {movie.results.map(i => 
                <li key={i.list_name} className={styles.item}>
                    <Link href={`/list/${i.list_name_encoded}`}>{i.list_name}</Link>
                </li>
            )}
        </ul>
        </>
    )
}