import { API_DETAIL } from "@/app/constance";
import styles from '@/app/styles/bookDetail.module.css'
import { IBookDetail } from "@/app/type";
import Image from "next/image";
import Link from "next/link";

export async function getDetails(name:string): Promise<IBookDetail>{
    const json = await(await fetch(`${API_DETAIL}/${name}`)).json();
    return json
}
export default async function BookDetail({name}:{name:string}){
    const detail = await getDetails(name)
    return(
        <>
            <div className={styles.wrap}>
                {detail.results.books.map((i, idx) => (
                    <div key={idx} className={styles.item}>
                        <Image src={i.book_image} alt={i.title} width={100} height={100} style={{width:'100%',height:'400px'}}/>
                        <h2>{i.title}</h2>
                        <p>{i.author}</p>
                        <Link href={i.amazon_product_url} target="_blank">Buy Now</Link>
                    </div>
                ))}
            </div>
        </>
    )
}