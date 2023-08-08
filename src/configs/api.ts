'use client';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const baseURL = 'https://dummyjson.com';
