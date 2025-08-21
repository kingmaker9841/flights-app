import { useEffect } from "react";

export const usePickerPositioning = (
  isOpen,
  pickerRef,
  searchFormRef,
  isMobile
) => {
  useEffect(() => {
    if (isOpen && pickerRef.current) {
      const picker = pickerRef.current;
      picker.style.position = "fixed";
      picker.style.zIndex = "1000";

      if (isMobile) {
        // Mobile: fullscreen overlay
        picker.style.top = "0";
        picker.style.left = "0";
        picker.style.right = "0";
        picker.style.bottom = "0";
        picker.style.width = "100vw";
        picker.style.height = "100vh";
        picker.style.transform = "none";
        document.body.style.overflow = "hidden";
      } else {
        // Desktop: position near search form
        if (searchFormRef?.current) {
          const formRect = searchFormRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const pickerHeight = 500;

          const topGap = 20;
          const preferredTop = Math.max(topGap, formRect.top);
          const maxTop = viewportHeight - pickerHeight - 20;

          picker.style.top = Math.min(preferredTop, maxTop) + "px";
          picker.style.right = "20px";
          picker.style.left = "auto";
          picker.style.width = "640px";
          picker.style.height = "auto";
          picker.style.transform = "none";
        } else {
          // Fallback to center
          picker.style.top = "50%";
          picker.style.left = "50%";
          picker.style.transform = "translate(-50%, -50%)";
          picker.style.width = "640px";
        }
      }
    }

    return () => {
      if (isMobile) {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen, isMobile, searchFormRef, pickerRef]);
};
