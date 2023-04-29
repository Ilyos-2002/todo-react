import { Button } from "../Button"
import { Input } from "../Input"

export function TableBody({ userData, removeUser }) {
    return (
        <tbody>
            {
                userData.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td style={{ width: "120px", border: "1px solid grey" }}>{user.task}</td>
                            <td style={{ width: "50px", border: "1px solid grey" }}>
                                <Input type={"checkbox"} />
                            </td>

                            <td style={{ width: "120px", border: "1px solid grey" }}>
                                < Button index={index} children={"Delete"} removeUser={removeUser} />
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}