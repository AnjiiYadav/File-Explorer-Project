import FileExplorer from "../../Views/FileExplorer"

export default function route(){
    return [
        {
            path : accessRoute.FILE.path,
            element : <FileExplorer/>,
        }
    ]
}
export const accessRoute = {
    FILE : {
        path : "/",
    }
}