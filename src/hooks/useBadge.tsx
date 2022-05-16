import { useEffect, useState } from "react";
import { usePopper } from "react-popper";

function useBadge() {
	const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null);
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
	const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

	const popper = usePopper(containerElement, popperElement, {
		modifiers: [
			{ name: "arrow", options: { element: arrowElement } },
			{ name: "flip", enabled: false }
		],
		placement: "top"
	});

	useEffect(() => {
		const tooltipTriggerElement = containerElement as HTMLDivElement;

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
	}, [popper, popperElement, containerElement]);

	return { popper, setContainerElement, setPopperElement, setArrowElement };
}

export default useBadge;
