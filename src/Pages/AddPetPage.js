import AddPetForm from "../Components/AddPetForm";
import FooterTransparent from "../Components/FooterTransparent";
import NavbarTransparent from "../Components/NavbarTransparent";

function AddPetPage() {
    return (
        <div className="bg-gradient-to-b from-gray-600 to-transparent">
            <NavbarTransparent />
            <AddPetForm />
            <FooterTransparent/>
        </div>
    );
}

export default AddPetPage;