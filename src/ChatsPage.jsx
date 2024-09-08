import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) =>{


    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow projectId="88bb31f4-a915-4ef9-ba44-cb1caa2d31a4" username={props.user.username} secret={props.user.secret} style={{height: "100%"}} />
        </div>
    )
}

export default ChatsPage;