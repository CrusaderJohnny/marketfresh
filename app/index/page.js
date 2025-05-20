import Nav from "../_components/nav/Nav";
import MainSections from "./mainSection";

export default function Page() {
    return(
        <>
            <div>
                <Nav/>
                <div>
                    <MainSections/>
                </div>
                <div>
                    <MainSections/>
                </div>
                <div>
                    <MainSections/>
                </div>
            </div>
            <p>This is the index / main landing page</p>
        </>
    );
};