import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CharacterDisplayBlock from '../components/Cards/CharacterDisplayBlock';


const CharacterDisplay = () => {
    const router = useRouter();
    const { id } = router.query;
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    useEffect(() => {
        axios.get('/api/dnd/getchar', {
            params: {
                id: id 
            }
        })
        .then((response) => {
            setData(response.data);
            setLoading(true);
        })
    })

    return(
        <div className="flex flex-col">
        <div className="flex">
            <h1 className="w-6/12"> Character </h1>
            <button className="w-2/12 mr-2 bg-indigo-400 text-white">
                Edit 
            </button>
            <button className="w-2/12 mr-2 bg-green-500 text-white">
                Share/Export
            </button>
            <button className="w-2/12 bg-red-500 text-white">
                Delete
            </button>
        </div>
        { loading
        ? 
            <CharacterDisplayBlock character={data} />
        : null }
        </div>
    )
}


export async function getServerSideProps(context){
    const session = await getSession(context);

    if(!session){
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }

    return {
        props: {
            session: await getSession(context)
        }
    }
}


export default CharacterDisplay;