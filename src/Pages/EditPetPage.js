import EditPets from "../Components/EditPets";
import Footer from "../Components/Footer";
import NavbarSignIn from "../Components/NavbarSignIn";

function EditPetPage() {
    return (
        <div>
            <NavbarSignIn />
            <EditPets />
            <Footer />
        </div>
    );
}

export default EditPetPage;