import { useContext, useEffect } from "react";
import { TerminalFunction } from "./_types";
import { FileSystemContext } from "../FileSystemContext";

const Clear: TerminalFunction = () => {
    const fileSystem = useContext(FileSystemContext);
    if (!fileSystem) return "Context Error!";

    useEffect(() => {
        fileSystem.clearCommandLog();
        fileSystem.addToCommandLog("Cleared!","");
    }, []);
        
    return ("");
}

export default Clear;

export function description() {
    return "Leert das Terminal";
}