import FileLayout from "../Layout/FileLayout"
import { FileRoutes } from "./FileRoutes"

export const routes = ()=>{
    return [
        {
            element : <FileLayout/>,
            children : [...FileRoutes()]
        }
    ]
}
