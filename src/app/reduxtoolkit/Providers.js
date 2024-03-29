"use client";
import { Provider } from "react-redux";
import {Store} from "@/app/reduxtoolkit/Store"

export function Providers({children}){
    return <Provider store={Store}>{children}</Provider>
}