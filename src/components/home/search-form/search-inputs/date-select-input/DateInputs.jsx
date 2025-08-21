import CustomDatePicker from "../../date-picker/CustomDatePicker";
import DesktopDateInputs from "./DesktopDateInputs";
import MobileDateInputs from "./MobileDateInputs";

export default function DateInputs({
  tripType,
  setTripType,
  departDate,
  setDepartDate,
  returnDate,
  setReturnDate,
  showCustomPicker,
  setShowCustomPicker,
  departHiddenRef,
  returnHiddenRef,
  searchFormRef,
}) {
  const handleDateClick = () => setShowCustomPicker(true);

  return (
    <>
      <MobileDateInputs
        tripType={tripType}
        departDate={departDate}
        returnDate={returnDate}
        onDateClick={handleDateClick}
      />

      <DesktopDateInputs
        tripType={tripType}
        departDate={departDate}
        returnDate={returnDate}
        setDepartDate={setDepartDate}
        setReturnDate={setReturnDate}
        onDateClick={handleDateClick}
        departHiddenRef={departHiddenRef}
        returnHiddenRef={returnHiddenRef}
      />

      <CustomDatePicker
        isOpen={showCustomPicker}
        onClose={() => setShowCustomPicker(false)}
        departDate={departDate}
        setDepartDate={setDepartDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        tripType={tripType}
        setTripType={setTripType}
        searchFormRef={searchFormRef}
      />
    </>
  );
}
