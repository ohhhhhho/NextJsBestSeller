export interface IBookList {
    results: {
            list_name: string;        
            display_name: string;         
            list_name_encoded: string;     
            oldest_published_date: string; 
            newest_published_date: string; 
            updated: 'WEEKLY' | 'DAILY' | 'MONTHLY'; 
        }[];
  }
export interface IBookDetail{
    results: {
      list_name:string,
        books: {
          rank: number;
          title: string;
          author: string;
          book_image: string;
          amazon_product_url: string;
        }[];
      };
}