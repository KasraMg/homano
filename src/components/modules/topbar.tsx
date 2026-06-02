import { useState, useEffect } from "react"; 

type TopbarProps = {
  onClose?: () => void;
  forceHide?: boolean;
};

const Topbar = ({ onClose, forceHide = false }: TopbarProps) => {
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if (forceHide) setVisible(false);
  }, [forceHide]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <>
      {showBanner && (
        <div className="relative flex items-center justify-center gap-4 w-full h-10 bg-main px-3 sm:px-0">
          <div className="inline-flex items-center justify-center gap-3 relative">
            <img
              style={{ filter: "invert(1)" }}
              src="/Images/ticket-percent.svg"
              className="relative size-6 hover:drop-shadow-custom transition-all"
            />
            <p className="font-bold text-white leading-[22px] text-sm text-center">
              ۳۰٪ تخفیف روی تمام محصولات — مدت محدود!
            </p>
          </div>
          {/* <div className="hidden sm:inline-flex">
            <ArrowLink
              title="مشاهده فروشگاه"
              textColor="text-secondary-color-blue"
              borderColor="border-secondary-color-blue"
              to="/Shop"
            />
          </div> */}
        </div>
      )}
    </>
  );
};

export default Topbar;
