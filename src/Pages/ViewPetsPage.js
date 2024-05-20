import ViewPets from "../Components/ViewPets";  
import NavbarSignIn from "../Components/NavbarSignIn";
// import Footer from "../Components/Footer";

export default function ViewPetsPage() {
    return (
        <div>
            <NavbarSignIn />
            <ViewPets/>
            {/* <Footer /> */}
        </div>
    );
}