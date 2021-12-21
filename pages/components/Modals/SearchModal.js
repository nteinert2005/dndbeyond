import { XIcon } from "@heroicons/react/outline";
import $ from 'jquery';
import styled from "styled-components";

const SearchModal = ( show ) => {
    const closeBar = () => {
        $('#searchBar').hide();
    }

    return (
        <SearchWrapper id="searchBar">
            <div className="relative">
                <h1>Search </h1> 
                <form> 
                    <input  className="w-full p-3 mt-4"
                            type="textbox" 
                            placeholder="Search for game or resource"
                            name="query" />
                    <span className="mt-2 inline-block">Press Enter to Search </span> 
                </form> 

                <XIcon onClick={() => closeBar()} className="closebtn text-white w-5 h-5" />
            </div>
        </SearchWrapper>
    )
}

const SearchWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.9);
    padding: 2em;

    h1 {
        font-weight: 800;
        color: white;
    }

    input[type="textbox"]{
        background: #1E1E27;
        color: white;
        height: 4rem;
        font-size: 1.25rem;
        padding-left: 2em;

        &::after {
            content: "Press Enter to search"
        }
    }

    div {
        width: 80%;
        margin: 0 auto;
    }
    
    .closebtn {
        position: absolute;
        top: 0;
        right: 0;
    }
`


export default SearchModal;