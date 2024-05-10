import BookingAppointment from "../Components/BookingAppointment";
import NavbarSignIn from "../Components/NavbarSignIn";
import Footer from "../Components/Footer";

function BookingAppointmentPage() {
    return (
        <div>
            <NavbarSignIn/>
            <BookingAppointment />
            <Footer/>
        </div>
    );
}

export default BookingAppointmentPage;
