import { useEffect, useRef, useState } from "react";

import CustomDatePicker from "../home/search-form/date-picker/CustomDatePicker";
import { searchAirports } from "../../api/flights";

// Helper function to format date for display
const formatDateDisplay = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

// Helper function to adjust date by days
const adjustDate = (dateString, days, setDate) => {
  if (!dateString) return;
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  const newDateString = date.toISOString().split("T")[0];
  setDate(newDateString);
};

function SearchInputs({
  tripType,
  setTripType,
  originInput,
  setOriginInput,
  originSelected,
  setOriginSelected,
  originOptions,
  setOriginOptions,
  showOriginOptions,
  setShowOriginOptions,
  destInput,
  setDestInput,
  destSelected,
  setDestSelected,
  destOptions,
  setDestOptions,
  showDestOptions,
  setShowDestOptions,
  departDate,
  setDepartDate,
  returnDate,
  setReturnDate,
  searchFormRef,
}) {
  // Debounced airport search
  const debounceRef = useRef({});
  // Hidden date input refs to anchor date picker properly
  const departHiddenRef = useRef(null);
  const returnHiddenRef = useRef(null);

  // Custom date picker state
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  useEffect(() => {
    if (
      !originInput ||
      originSelected?.presentation?.suggestionTitle === originInput
    )
      return;
    clearTimeout(debounceRef.current.origin);
    debounceRef.current.origin = setTimeout(async () => {
      try {
        const list = await searchAirports(originInput);
        setOriginOptions(list);
        setShowOriginOptions(true);
      } catch (e) {
        console.error(e);
      }
    }, 250);
  }, [originInput, originSelected, setOriginOptions, setShowOriginOptions]);

  useEffect(() => {
    if (!destInput || destSelected?.presentation?.suggestionTitle === destInput)
      return;
    clearTimeout(debounceRef.current.dest);
    debounceRef.current.dest = setTimeout(async () => {
      try {
        const list = await searchAirports(destInput);
        setDestOptions(list);
        setShowDestOptions(true);
      } catch (e) {
        console.error(e);
      }
    }, 250);
  }, [destInput, destSelected, setDestOptions, setShowDestOptions]);

  const debouncedSearch = (input, type) => {
    if (type === "origin") {
      clearTimeout(debounceRef.current.origin);
      debounceRef.current.origin = setTimeout(async () => {
        try {
          const list = await searchAirports(input);
          setOriginOptions(list);
          setShowOriginOptions(true);
        } catch (e) {
          console.error(e);
        }
      }, 250);
    } else if (type === "destination") {
      clearTimeout(debounceRef.current.dest);
      debounceRef.current.dest = setTimeout(async () => {
        try {
          const list = await searchAirports(input);
          setDestOptions(list);
          setShowDestOptions(true);
        } catch (e) {
          console.error(e);
        }
      }, 250);
    }
  };

  return (
    <div className="relative px-4 md:px-5 pb-8">
      {/* Mobile: Two rows layout (below 768px) */}
      <div className="md:hidden space-y-3">
        {/* Row 1: From and To */}
        <div className="grid grid-cols-2 gap-3">
          {/* From */}
          <div className="relative">
            <div className="relative rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
              <svg
                className="w-5 h-5 mr-2 text-text-secondary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="5" strokeWidth="2" />
              </svg>
              <input
                type="text"
                value={originInput}
                onChange={(e) => {
                  setOriginInput(e.target.value);
                  debouncedSearch(e.target.value, "origin");
                }}
                onFocus={() => setShowOriginOptions(true)}
                placeholder="Where from?"
                className="flex-1 text-[16px] placeholder-gray-light border-0 focus:outline-none bg-transparent text-text-input truncate"
              />
            </div>

            {showOriginOptions && originOptions.length > 0 && (
              <div className="absolute left-0 z-30 mt-2 bg-gray-bg border border-gray-border rounded-[12px] shadow-lg w-[calc(100%+160px)] max-h-80 overflow-auto">
                {originOptions.map((opt) => (
                  <button
                    type="button"
                    key={
                      (opt.navigation?.entityId || "") +
                      (opt.presentation?.suggestionTitle || "")
                    }
                    className="w-full text-left px-4 py-3 hover:bg-gray-hover border-b border-gray-border last:border-b-0"
                    onClick={() => {
                      setOriginSelected(
                        opt.presentation?.suggestionTitle ||
                          opt.presentation?.title
                      );
                      setOriginInput(
                        opt.presentation?.suggestionTitle ||
                          opt.presentation?.title ||
                          ""
                      );
                      setShowOriginOptions(false);
                    }}
                  >
                    <div>
                      <div className="text-[15px] text-text-primary">
                        {opt.presentation?.suggestionTitle ||
                          opt.presentation?.title}
                      </div>
                      <div className="text-[13px] text-text-secondary">
                        {opt.presentation?.subtitle}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* To */}
          <div className="relative">
            <div className="relative rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
              <svg
                className="w-5 h-5 mr-2 text-text-secondary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <input
                type="text"
                value={destInput}
                onChange={(e) => {
                  setDestInput(e.target.value);
                  debouncedSearch(e.target.value, "destination");
                }}
                onFocus={() => setShowDestOptions(true)}
                placeholder="Where to?"
                className="flex-1 text-[16px] placeholder-gray-light border-0 focus:outline-none bg-transparent text-text-input truncate"
              />
            </div>

            {showDestOptions && destOptions.length > 0 && (
              <div className="absolute right-0 z-30 mt-2 bg-gray-bg border border-gray-border rounded-[12px] shadow-lg w-[calc(100%+160px)] max-h-80 overflow-auto">
                {destOptions.map((opt) => (
                  <button
                    type="button"
                    key={
                      (opt.navigation?.entityId || "") +
                      (opt.presentation?.suggestionTitle || "")
                    }
                    className="w-full text-left px-4 py-3 hover:bg-gray-hover border-b border-gray-border last:border-b-0"
                    onClick={() => {
                      setDestSelected(
                        opt.presentation?.suggestionTitle ||
                          opt.presentation?.title
                      );
                      setDestInput(
                        opt.presentation?.suggestionTitle ||
                          opt.presentation?.title ||
                          ""
                      );
                      setShowDestOptions(false);
                    }}
                  >
                    <div>
                      <div className="text-[15px] text-text-primary">
                        {opt.presentation?.suggestionTitle ||
                          opt.presentation?.title}
                      </div>
                      <div className="text-[13px] text-text-secondary">
                        {opt.presentation?.subtitle}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Date Input */}
        {tripType === "roundtrip" ? (
          /* Round trip: Combined date input with separator */
          <div className="relative">
            <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center">
              {/* Calendar Icon */}
              <div className="pl-3">
                <svg
                  className="w-5 h-5 text-text-secondary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
              </div>

              {/* Departure Date */}
              <div className="flex-1 flex items-center relative">
                <input
                  type="text"
                  value={formatDateDisplay(departDate)}
                  readOnly
                  placeholder="Departure"
                  className="w-full px-3 py-2 text-[16px] border-0 focus:outline-none bg-transparent text-text-input cursor-pointer"
                  onClick={() => {
                    setShowCustomPicker(true);
                  }}
                />
              </div>

              {/* Vertical Separator */}
              <div className="w-px bg-gray-border h-6 mx-2"></div>

              {/* Return Date */}
              <div className="flex-1 flex items-center relative">
                <input
                  type="text"
                  value={returnDate ? formatDateDisplay(returnDate) : "Return"}
                  readOnly
                  placeholder="Return"
                  className="w-full px-3 py-2 text-[16px] border-0 focus:outline-none bg-transparent text-text-input cursor-pointer"
                  onClick={() => {
                    setShowCustomPicker(true);
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          /* One way: Full width date input */
          <div className="relative">
            <div className="relative rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
              <svg
                className="w-5 h-5 mr-2 text-text-secondary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
              <input
                type="text"
                value={departDate ? formatDateDisplay(departDate) : "Departure"}
                readOnly
                placeholder="Departure"
                className="flex-1 text-[16px] border-0 focus:outline-none bg-transparent text-text-input cursor-pointer"
                onClick={() => {
                  setShowCustomPicker(true);
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Desktop: Single row layout (768px+) */}
      <div className="hidden md:grid grid-cols-[1fr_1fr_1.4fr] gap-3">
        {/* From */}
        <div className="relative">
          <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
            <svg
              className="w-5 h-5 mr-2 text-text-secondary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="5" strokeWidth="2" />
            </svg>
            <input
              type="text"
              value={originInput}
              onChange={(e) => {
                setOriginInput(e.target.value);
                setOriginSelected(null);
              }}
              onFocus={() => setShowOriginOptions(true)}
              placeholder="Where from?"
              className="flex-1 text-[16px] placeholder-gray-light border-0 focus:outline-none bg-transparent text-text-input truncate"
            />
          </div>

          {/* Swap button */}
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10">
            <button
              type="button"
              onClick={() => {
                const tempInput = originInput;
                const tempSelected = originSelected;
                setOriginInput(destInput);
                setOriginSelected(destSelected);
                setDestInput(tempInput);
                setDestSelected(tempSelected);
              }}
              className="w-10 h-10 bg-gray-bg border border-gray-border rounded-full hover:bg-gray-hover flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
              </svg>
            </button>
          </div>

          {showOriginOptions && originOptions.length > 0 && (
            <div className="absolute z-30 mt-2 bg-gray-bg border border-gray-border rounded-[12px] shadow-lg w-[calc(100%+160px)] max-h-80 overflow-auto">
              {originOptions.map((opt) => (
                <button
                  type="button"
                  key={
                    (opt.navigation?.entityId || "") +
                    (opt.presentation?.suggestionTitle || "")
                  }
                  className="w-full text-left px-4 py-3 hover:bg-gray-hover border-b border-gray-border last:border-b-0"
                  onClick={() => {
                    setOriginSelected(
                      opt.presentation?.suggestionTitle ||
                        opt.presentation?.title
                    );
                    setOriginInput(
                      opt.presentation?.suggestionTitle ||
                        opt.presentation?.title
                    );
                    setShowOriginOptions(false);
                  }}
                >
                  <div>
                    <div className="text-[15px] text-text-primary">
                      {opt.presentation?.suggestionTitle ||
                        opt.presentation?.title}
                    </div>
                    <div className="text-[13px] text-text-secondary">
                      {opt.presentation?.subtitle}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* To */}
        <div className="relative">
          <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
            <svg
              className="w-5 h-5 mr-2 text-text-secondary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            <input
              type="text"
              value={destInput}
              onChange={(e) => {
                setDestInput(e.target.value);
                setDestSelected(null);
              }}
              onFocus={() => setShowDestOptions(true)}
              placeholder="Where to?"
              className="flex-1 text-[16px] placeholder-gray-light border-0 focus:outline-none bg-transparent text-text-input truncate"
            />
          </div>

          {showDestOptions && destOptions.length > 0 && (
            <div className="absolute right-0 z-30 mt-2 bg-gray-bg border border-gray-border rounded-[12px] shadow-lg w-[calc(100%+160px)] max-h-80 overflow-auto">
              {destOptions.map((opt) => (
                <button
                  type="button"
                  key={
                    (opt.navigation?.entityId || "") +
                    (opt.presentation?.suggestionTitle || "")
                  }
                  className="w-full text-left px-4 py-3 hover:bg-gray-hover border-b border-gray-border last:border-b-0"
                  onClick={() => {
                    setDestSelected(
                      opt.presentation?.suggestionTitle ||
                        opt.presentation?.title
                    );
                    setDestInput(
                      opt.presentation?.suggestionTitle ||
                        opt.presentation?.title
                    );
                    setShowDestOptions(false);
                  }}
                >
                  <div>
                    <div className="text-[15px] text-text-primary">
                      {opt.presentation?.suggestionTitle ||
                        opt.presentation?.title}
                    </div>
                    <div className="text-[13px] text-text-secondary">
                      {opt.presentation?.subtitle}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Combined Date Range - Google Flights Style */}
        <div className="relative">
          <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center">
            {/* Calendar Icon */}
            <div className="pl-3">
              <svg
                className="w-5 h-5 text-text-secondary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
            </div>

            {/* Departure Date */}
            <div className="flex-1 flex items-center relative">
              <input
                type="text"
                value={formatDateDisplay(departDate)}
                readOnly
                placeholder="Departure"
                className="w-full px-3 py-2 text-[16px] border-0 focus:outline-none bg-transparent text-text-input cursor-pointer"
                onClick={() => {
                  setShowCustomPicker(true);
                }}
              />
              {/* Hidden date input positioned within this section */}
              <input
                ref={departHiddenRef}
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                style={{ zIndex: -1 }}
              />
              {/* Departure Date Arrows */}
              <div
                className="flex items-center relative"
                style={{ zIndex: 10 }}
              >
                <button
                  type="button"
                  onClick={() => adjustDate(departDate, -1, setDepartDate)}
                  className="p-1 hover:bg-gray-hover rounded"
                >
                  <svg
                    className="w-4 h-4 text-text-secondary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => adjustDate(departDate, 1, setDepartDate)}
                  className="p-1 hover:bg-gray-hover rounded"
                >
                  <svg
                    className="w-4 h-4 text-text-secondary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Vertical Separator for Round Trip */}
            {tripType === "roundtrip" && (
              <div className="w-px bg-gray-border h-6 mx-2"></div>
            )}

            {/* Return Date - only for round trip */}
            {tripType === "roundtrip" && (
              <div className="flex-1 flex items-center relative">
                <input
                  type="text"
                  value={returnDate ? formatDateDisplay(returnDate) : "Return"}
                  readOnly
                  placeholder="Return"
                  className="w-full px-3 py-2 text-[16px] border-0 focus:outline-none bg-transparent text-text-input cursor-pointer"
                  onClick={() => {
                    setShowCustomPicker(true);
                  }}
                />
                {/* Hidden date input positioned within this section */}
                <input
                  ref={returnHiddenRef}
                  type="date"
                  value={returnDate || ""}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                  style={{ zIndex: -1 }}
                />
                {/* Return Date Arrows */}
                {returnDate && (
                  <div
                    className="flex items-center pr-3 relative"
                    style={{ zIndex: 10 }}
                  >
                    <button
                      type="button"
                      onClick={() => adjustDate(returnDate, -1, setReturnDate)}
                      className="p-1 hover:bg-gray-hover rounded"
                    >
                      <svg
                        className="w-4 h-4 text-text-secondary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => adjustDate(returnDate, 1, setReturnDate)}
                      className="p-1 hover:bg-gray-hover rounded"
                    >
                      <svg
                        className="w-4 h-4 text-text-secondary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Date Picker */}
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
    </div>
  );
}

export default SearchInputs;
