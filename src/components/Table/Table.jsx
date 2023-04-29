import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import "./Table.css"





export function Table({ userData, removeUser }) {
    return (
        <table className="customers" >
            <TableHead />
            <TableBody userData={userData} removeUser={removeUser} />
        </table>
    )
}
