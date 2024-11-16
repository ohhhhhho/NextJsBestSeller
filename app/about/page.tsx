import styles from '@/app/about/about.module.css'
export const metadata ={
    title:'About'
}
export default function About(){
    return(
        <>
            <div className={styles.wrap}>
                <h2 className={styles.title}>About Us</h2>
                <p className={styles.desc}>
                    Welcome to Website, your go-to destination for discovering the best books on the market today. Our mission is simple: to bring you the latest and greatest titles that are taking the literary world by storm.
                </p>
                <p className={styles.desc}>
                    We carefully curate a collection of best-sellers from a variety of genres, ensuring there&apos;s something for every reader — whether you&apos;re looking for the latest thrilling novel, a heartwarming memoir, or a business book that will change the way you think. Our goal is to help you find your next great read and to make sure you never run out of books to love.
                </p>
                <p className={styles.desc}>
                    At Website, we believe books have the power to transform lives, spark creativity, and connect us to different perspectives. We are passionate about sharing these incredible stories with you and hope to inspire your next reading adventure.
                </p>
                <p className={styles.desc}>
                    Thank you for visiting our site. Happy reading!
                </p>
            </div>
        </>
    )
}