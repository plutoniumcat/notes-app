import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";

const initialNotesData = {
    id: 1,
    title: "Welcome to the notes taker!",
    description: "Make your notes here!",
    isCompleted: false,
    dueDate: new Date().setDate(new Date().getDate() + 1), // Sets due date 1 day in the future
    createdAtDate: Date.now()
}

const notesReducer = (previousState, instructions) => {
    let stateEditable = [...previousState];

    switch (instructions.type) {
        case "create":
            break;
        case "update":
            break;
        case "delete":
            break;
        case "sortByDueDate":
            break;
        case "sortByCreatedAtDate":
            break;
        case "sortById":
            break;
        default:
            console.log(`Invalid instruction type provided. It was ${instructions.type}`);
            return previousState
    }
}

export const NoteDataContext = createContext(null);
export const NoteDispatchContext = createContext(null);

export function useNoteData() {
    return useContext(NoteDataContext);
}

export function useNoteDispatch() {
    return useContext(NoteDispatchContext);
}

export default function NotesProvider(props) {
    const [notesData, notesDispatch] = useReducer(notesReducer, initialNotesData);

    const [persistentData, setPersistentData] = useLocalStorage("notes", initialNotesData);

    useEffect(() => {
        // On app start, overwrite notes data with persistent data
        // notesDispatch();
    },[]);

    useEffect(() => {
        console.log("Local storage " + persistentData);
    }, [persistentData]);

    useEffect(() => {
        setPersistentData(notesData);
    }, [notesData]);

    return(
        <NoteDataContext.Provider value={ notesData }>
            <NoteDispatchContext.Provider value={ notesDispatch }>
                {props.children}
            </NoteDispatchContext.Provider>
        </NoteDataContext.Provider>
    )
}