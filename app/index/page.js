// Dan: Removed link to old header 
import NavMT from '../_components/nav/NavMT'
import MainSections from "./mainSection";

export default function Page() {
    return(
        <>
            <div>
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