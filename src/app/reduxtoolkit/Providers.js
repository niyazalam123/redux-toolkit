"use client";
const { Provider } = require("react-redux");
import {store2} from "@/app/reduxtoolkit/Store"

export function Providers({children}){
    return <Provider store={store2}>
        {children}
    </Provider>
}