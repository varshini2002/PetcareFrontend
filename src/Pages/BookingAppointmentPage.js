import BookingAppointment from "../Components/BookingAppointment";
import NavbarTransparent from "../Components/NavbarTransparent";
import FooterTransparent from "../Components/FooterTransparent";

function BookingAppointmentPage() {
    return (
        <div className="bg-gradient-to-b from-gray-600 to-transparent">
            
            <NavbarTransparent />
            <BookingAppointment />
            <FooterTransparent/>
        </div>

    );
}

export default BookingAppointmentPage;
