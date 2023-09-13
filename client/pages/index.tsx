import { Inter } from 'next/font/google'
import SearchBar from '@/components/SearchBar'
import { gql, useQuery } from "@apollo/client";
import Results from '@/components/Results';
import { useState } from 'react';
import { Spin } from 'antd';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedGroup, setSelectedGroup] = useState<any>(null)
  const [page, setPage] = useState<number>(1)
  const GET_COUNTRY = gql`
query sizeQuery($page: Int, $group: Int, $common: String, $capital: String) {
  countries(page: $page, group: $group, common: $common, capital: $capital) {
    name {
      common
    }
    status
    capital
    flags {
      png
      svg
      alt
    }
  }
  }
`


  const {loading, error, data, refetch } = useQuery<any>(GET_COUNTRY, {
    variables: {
      group: selectedGroup,
      common: searchQuery,
      page: page
    }
  });

if(loading) return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
      <Spin size="large"/>
    </div>
    );

if(error) return (
  <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
    <h1>Error Occured</h1>
  </div>
);



  return (
    <main
      className={`flex min-h-screen flex-col items-center px-24 pt-12 bg-gray-200 ${inter.className}`}
    >
      <SearchBar 
          setSearchQuery={setSearchQuery}
          setSelectedGroup={setSelectedGroup}
          setPage={setPage}
          refetch = {refetch}
            />
      <Results data={data?.countries}/>
    </main>
  )
}



