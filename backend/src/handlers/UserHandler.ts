import {Response, Request} from "express-serve-static-core"

export default function UserHandler(request : Request, response: Response){
    response.json("handler woring")
}