import AddPetForm from "../Components/AddPetForm";
import Footer from "../Components/Footer";
import NavbarSignIn from "../Components/NavbarSignIn";

function AddPetPage() {
    return (
        <div>
            <NavbarSignIn />
            <AddPetForm />
            <Footer />
        </div>
    );
}

export default AddPetPage;