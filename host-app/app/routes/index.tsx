import {Link} from "@remix-run/react"
import styles from "app/styles/index.css"
import SmallComponent from './SmallComponent'

export function links() {
    return [{ rel: "stylesheet", href: styles }]
}

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <h1>Remix host app</h1>
            <div>
                <SmallComponent/>
            </div>
            <div>
                <Link to="/ssr" className="">
                    A tiny frontend loaded{" "}
                    <strong className="text-primary-base">
                        on SSR and client side
                    </strong>
                </Link>
            </div>
            <div>
                <Link to="/client-side-only" className="border-b-2">
                    A tiny frontend loaded{" "}
                    <strong className="text-primary-base">client side only</strong>
                </Link>
            </div>
        </div>
    );
}
