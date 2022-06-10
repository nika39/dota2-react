import { Placement } from "@popperjs/core";
import { useEffect, useState } from "react";
import { usePopper } from "react-popper";

function useTooltip(placement: Placement, hoverEvent: boolean) {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

    const popper = usePopper(referenceElement, popperElement, {
        modifiers: [
            {
                name: "eventListeners",
                options: {
                    scroll: false
                }
            },
            { name: "arrow", options: { element: arrowElement } },
            { name: "flip", enabled: false }
        ],
        placement
    });

    useEffect(() => {
        if (!hoverEvent) return;
        const tooltipTriggerElement = referenceElement;

        const handleBadgeMouseEnter = () => {
            popperElement!.style.display = "block";

            popper.update?.();
        };

        const handleBadgeMouseLeave = () => {
            popperElement!.style.display = "none";
        };

        tooltipTriggerElement?.addEventListener("mouseenter", handleBadgeMouseEnter);
        tooltipTriggerElement?.addEventListener("mouseleave", handleBadgeMouseLeave);

        return () => {
            tooltipTriggerElement?.removeEventListener("mouseenter", handleBadgeMouseEnter);
            tooltipTriggerElement?.removeEventListener("mouseleave", handleBadgeMouseLeave);
        };
    }, [popper, popperElement, referenceElement, hoverEvent]);

    return { popper, setReferenceElement, setPopperElement, setArrowElement };
}

export default useTooltip;
