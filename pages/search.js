import Head from "next/head"
import { useRouter } from 'next/router';
import Footer from "../components/Footer";
import Header from "../components/Header"
import SearchResults from "../components/SearchResults";
import Res from "../Res"
function Search({results}) {

    const router = useRouter();

    return (
        <div className="bg-blue-300 bg-gradient-to-r from-blue-300 to-green-300">
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>

            <Header />

            <SearchResults results={results}/>

            <Footer />
            
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Res : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(res=> res.json());

    //After the server side render, pass the results to the client

    return{
        props:{
            results: data,
        }
    }

}
