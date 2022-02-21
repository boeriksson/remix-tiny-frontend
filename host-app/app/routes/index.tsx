import {Link} from "@remix-run/react";

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <h1>Welcome to The host app</h1>
            <ul>
                <li>
                    This is from remix host!
                </li>
                <li>
                    <Link to="/ssr" className="">
                        A tiny frontend loaded{" "}
                        <strong className="text-primary-base">
                            on SSR and client side
                        </strong>
                    </Link>
                </li>
                <li>
                    <Link to="/client-side-only" className="border-b-2">
                        A tiny frontend loaded{" "}
                        <strong className="text-primary-base">client side only</strong>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
