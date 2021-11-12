import { useEffect, useState } from 'react'
import "../styles/Searchbox.css";
import Cards from './Cards';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { delectStore, setIssues, setRepositories, setUsers } from '../redux/actions/gitActions';

export interface AppState {
    searchWord: string;
    type: string;
}

export interface AppProps {
}

const Searchbox = (props: AppProps) => {
    const gitData: any = useSelector((state) => state);

    const dispach = useDispatch();
    const [input, setInput] = useState({
        searchWord: "",
        type: 'users'
    })

    const inputsHandler = (e: any) => {
        const type = input.type

        setInput({ ...input, [e.target.name]: e.target.value })

        if (e.target.name === 'type' && e.target.value !== type && input.searchWord.length > 2) {
            FetchData(e.target.value, input.searchWord)
        }

    }

    const FetchData = async (type: string, searchWord: string) => {
        const payload = { type, searchWord }
        const keyCombination = `${type}_${searchWord}`;
        const payloadData = { ...gitData.searchResult.data };
        
        if (!payloadData[keyCombination] || payloadData[keyCombination]?.length === 0) {
            
            await fetch("http://localhost:9000/api/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
                .then(res => res.json())
                .then((data) => {
                    switch (type) {
                        case 'users':
                            payloadData[keyCombination] = data;
                            dispach(setUsers(payloadData))
                            break
                        case 'repositories':
                            payloadData[keyCombination] = data;
                            dispach(setRepositories(payloadData))
                            break
                        case 'issues':
                            payloadData[keyCombination] = data;
                            dispach(setIssues(payloadData))
                            break
                        default:
                            throw new Error("Data not save")
                    }

                })
        }

    }

    const delectData = async() =>{
        await fetch("http://localhost:9000/api/clear-cache",{
            method: "DELETE",
        }).then(data => dispach(delectStore()))
        .then(data => alert("Data delected successfully."))
    }

    useEffect(() => {
        if (input.searchWord.length > 2) {
            FetchData(input.type, input.searchWord);
        }
    }, [input.searchWord])

    return (
        <div className={`mainDiv`}>
            <div style={{ width: '100%' }} className={!(input.searchWord.length > 2) ? 'searchCenter' : ''}>
                <Navbar />
                <div style={{ margin: "20px 0px" }}>
                    <input
                        type="text"
                        name="searchWord"
                        value={input.searchWord}
                        onChange={inputsHandler}
                        className='searchInput'
                        style={{ marginRight: '10px' }}
                        placeholder="Start typing to search .."
                        disabled={!input.type.length}
                    />
                    <select
                        name="type"
                        id="type"
                        className='searchInput'
                        style={{ marginLeft: '10px' }}
                        value={input.type}
                        onChange={inputsHandler}
                    >

                        <option value="users">User</option>
                        <option value="repositories">Repository</option>
                        <option value="issues">Issues</option>
                    </select>
                    <button type="button" className="btn btn-danger" onClick={delectData}>Clear Cache</button>
                </div>
            </div>
            <Cards search={input} />
        </div>
    )
}

export default Searchbox;