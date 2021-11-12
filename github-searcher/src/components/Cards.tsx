import { useSelector } from "react-redux";
import { Issues } from "../models/issues";
import { Repositories } from "../models/repositories";
import { Users } from "../models/users";
import '../styles/Card.css';

export interface AppProps {
    search: {
        searchWord: string,
        type: string,
    };
}
const Card = (props: AppProps) => {
    const searchData = useSelector((state: any) => state.searchResult.data);
    
    const data = searchData[props.search.type + "_" + props.search.searchWord];
    
    const renderUsers = () => {
        return (
            data?.map((data: Users, index: number) => (
                <div className="column" key={index}>
                    <a href={data.html_url} target="_blank" className="none">
                        <div className="card" >
                            <img src={data.avatar_url} className="responsive" alt="Profile" />
                            <h3 className="keyColor">Name: </h3> {data.login}
                        </div>
                    </a>
                </div>
            ))
        )
    }

    const renderRepositories = () => {
        return (
            data?.map((data: Repositories, index: number) => (
                <div className="column" key={index}>
                    <a href={data.html_url} target="_blank" className="none">
                        <div className="card">
                            <h3 className="keyColor">Repository: </h3>{data.name}
                            <h3 className="keyColor">User: </h3>{data.owner?.login}
                            <h3 className="keyColor">Repository: </h3>{data.name}
                            <h3 className="keyColor">Languages: </h3>{data.language}
                            <h3 className="keyColor">Stars: </h3>{data.watchers_count}
                            <h3 className="keyColor">Forks: </h3>{data.forks_count}
                        </div>
                    </a>
                </div>
            )
            ))
    }

    const renderIssues = () => {
        return (
            data?.map((data: Issues, index: number) => (
                <div className="column" key={index}>
                    <a href={data.html_url} target="_blank" className="none">
                        <div className="card">
                            <h3 className="keyColor">Title: </h3>{data.title}
                            <h3 className="keyColor">User: </h3>{data.user?.login}
                            <h3 className="keyColor">Issue No.: </h3>{data.number}
                            <h3 className="keyColor">Total Comments: </h3>{data.comments}
                            <h3 className="keyColor">State: </h3>{data.state}
                        </div>
                    </a>
                </div>
            )
            ))
    }
    return (
        <div style={{ width: '100%' }}>
            {data && (props.search.type === "users") && (props.search.searchWord.length > 2) ? renderUsers() : null}
            {data && (props.search.type === "repositories") && (props.search.searchWord.length > 2) ? renderRepositories() : null}
            {data && (props.search.type === "issues") && (props.search.searchWord.length > 2) ? renderIssues() : null}
        </div>
    )
}

export default Card;