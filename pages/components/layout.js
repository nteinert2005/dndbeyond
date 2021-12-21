import Sidebar from "./Sidebar";

export default function Layout({children}){
    return(
        <div style={{
            background: "#14141A",
            color: "#77748C",
            height: '100vh'
        }} className="w-full">
            <Sidebar />
            <main style={{
                marginTop: '34px',
                marginLeft: '120px',
                height: "100"
            }} className="w-9/12 float-left"> { children } </main>
        </div>
    )
}