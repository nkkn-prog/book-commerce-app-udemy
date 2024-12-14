import { BookType } from '@/app/types/types';
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY!
});


export const getAllBooks = async ()=> {
  const allBooks = await client.getList<BookType>({
    endpoint: 'book-commerce-app-udemy',
  });

  return allBooks
}