import { useCallback, useEffect, useRef } from "react";
import useTooltip from "../../../hooks/useTooltip";

function DarkModeToggler() {
    const tooltip = useTooltip("bottom-end", false);

    const lightModeElement = useRef<HTMLDivElement>(null);
    const darkModeElement = useRef<HTMLDivElement>(null);
    const systemModeElement = useRef<HTMLDivElement>(null);

    const removeActiveClassName = () => {
        lightModeElement?.current?.classList.remove("text-purple-400", "dark:text-amber-400");
        darkModeElement?.current?.classList.remove("text-purple-400", "dark:text-amber-400");
        systemModeElement?.current?.classList.remove("text-purple-400", "dark:text-amber-400");
    };

    const setLightMode = useCallback(() => {
        removeActiveClassName();
        lightModeElement?.current?.classList.add("text-purple-400", "dark:text-amber-400");

        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }, []);

    const setDarkMode = useCallback(() => {
        removeActiveClassName();
        darkModeElement?.current?.classList.add("text-purple-400", "dark:text-amber-400");

        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
    }, []);

    const setSystemMode = useCallback(() => {
        removeActiveClassName();
        systemModeElement?.current?.classList.add("text-purple-400", "dark:text-amber-400");

        localStorage.removeItem("theme");

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        if (localStorage.theme === "dark") {
            setDarkMode();
        } else if (localStorage.theme === "light") {
            setLightMode();
        } else {
            setSystemMode();
        }
    }, [setLightMode, setDarkMode, setSystemMode]);

    return (
        <div className="group relative z-[1045] flex items-center">
            <div className="flex cursor-pointer items-center py-2 pl-1" ref={tooltip.setReferenceElement}>
                <div className="dark:hidden">
                    <svg className="h-5 w-5" viewBox="0 0 512 512">
                        <path
                            className="fill-current"
                            d="M256 112C247.2 112 240 104.8 240 96V16C240 7.156 247.2 0 256 0s16 7.156 16 16V96C272 104.8 264.8 112 256 112zM272 496V416c0-8.844-7.156-16-16-16S240 407.2 240 416v80c0 8.844 7.156 16 16 16S272 504.8 272 496zM512 256c0-8.844-7.156-16-16-16H416c-8.844 0-16 7.156-16 16s7.156 16 16 16h80C504.8 272 512 264.8 512 256zM112 256c0-8.844-7.156-16-16-16H16C7.156 240 0 247.2 0 256s7.156 16 16 16H96C104.8 272 112 264.8 112 256zM380.5 154.2l56.56-56.59c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-56.56 56.59c-6.25 6.25-6.25 16.37 0 22.62c3.125 3.125 7.219 4.691 11.31 4.691S377.3 157.3 380.5 154.2zM97.61 437l56.56-56.59c6.25-6.25 6.25-16.37 0-22.62s-16.38-6.253-22.62-.0031l-56.56 56.59c-6.25 6.25-6.25 16.38 0 22.62c3.125 3.125 7.219 4.688 11.31 4.688S94.48 440.2 97.61 437zM437 437c6.25-6.25 6.25-16.38 0-22.62l-56.56-56.59c-6.25-6.25-16.38-6.247-22.62 .0031s-6.25 16.37 0 22.62l56.56 56.59c3.125 3.125 7.219 4.688 11.31 4.688S433.9 440.2 437 437zM154.2 154.2c6.25-6.25 6.25-16.37 0-22.62L97.61 74.97c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l56.56 56.59c3.125 3.125 7.219 4.688 11.31 4.688S151 157.3 154.2 154.2zM368 256c0-61.75-50.25-112-112-112S144 194.3 144 256s50.25 112 112 112S368 317.8 368 256zM336 256c0 44.13-35.89 80-80 80S176 300.1 176 256S211.9 176 256 176S336 211.9 336 256z"
                        />
                    </svg>
                </div>
                <div className="hidden dark:flex">
                    <svg className="h-5 w-5" viewBox="0 0 512 512">
                        <path
                            className="fill-current"
                            d="M428.3 367.5c-5.609-9.312-16.08-13.91-26.75-11.97c-42.39 8.188-85.83-2.938-119.2-30.5C248.4 297 228.9 255.5 228.9 211.3c0-52.75 28.2-101.8 73.59-127.8c9.453-5.406 14.38-15.88 12.55-26.66c-1.812-10.75-9.891-19-20.61-21C283.1 33.66 265.3 32 253.9 32C131.5 32 32 132.5 32 256s99.55 224 221.9 224c67.19 0 130-30.25 172.4-83C433.1 388.4 433.9 376.9 428.3 367.5zM253.9 448C149.2 448 64 361.9 64 256s85.19-192 189.9-192c4.891 0 11.53 .4062 18.09 1.031C225.3 98.34 196.9 152.9 196.9 211.3c0 53.84 23.7 104.3 65.05 138.5c36.25 29.94 82.17 43.88 128.5 39.69C354.8 426.8 305.8 448 253.9 448z"
                        />
                    </svg>
                </div>
            </div>
            <div
                className="invisible flex w-48 flex-col rounded bg-slate-200 py-2 shadow-lg group-hover:visible dark:bg-zinc-900"
                ref={tooltip.setPopperElement}
                style={tooltip.popper.styles.popper}
                {...tooltip.popper.attributes.popper}
            >
                <div
                    className="flex cursor-pointer items-center space-x-2 p-2 text-sm transition-colors hover:bg-slate-100 hover:dark:bg-neutral-800"
                    onClick={setLightMode}
                    ref={lightModeElement}
                >
                    <svg className="h-4 w-4" viewBox="0 0 512 512">
                        <path
                            className="fill-current"
                            d="M256 112C247.2 112 240 104.8 240 96V16C240 7.156 247.2 0 256 0s16 7.156 16 16V96C272 104.8 264.8 112 256 112zM272 496V416c0-8.844-7.156-16-16-16S240 407.2 240 416v80c0 8.844 7.156 16 16 16S272 504.8 272 496zM512 256c0-8.844-7.156-16-16-16H416c-8.844 0-16 7.156-16 16s7.156 16 16 16h80C504.8 272 512 264.8 512 256zM112 256c0-8.844-7.156-16-16-16H16C7.156 240 0 247.2 0 256s7.156 16 16 16H96C104.8 272 112 264.8 112 256zM380.5 154.2l56.56-56.59c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-56.56 56.59c-6.25 6.25-6.25 16.37 0 22.62c3.125 3.125 7.219 4.691 11.31 4.691S377.3 157.3 380.5 154.2zM97.61 437l56.56-56.59c6.25-6.25 6.25-16.37 0-22.62s-16.38-6.253-22.62-.0031l-56.56 56.59c-6.25 6.25-6.25 16.38 0 22.62c3.125 3.125 7.219 4.688 11.31 4.688S94.48 440.2 97.61 437zM437 437c6.25-6.25 6.25-16.38 0-22.62l-56.56-56.59c-6.25-6.25-16.38-6.247-22.62 .0031s-6.25 16.37 0 22.62l56.56 56.59c3.125 3.125 7.219 4.688 11.31 4.688S433.9 440.2 437 437zM154.2 154.2c6.25-6.25 6.25-16.37 0-22.62L97.61 74.97c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l56.56 56.59c3.125 3.125 7.219 4.688 11.31 4.688S151 157.3 154.2 154.2zM368 256c0-61.75-50.25-112-112-112S144 194.3 144 256s50.25 112 112 112S368 317.8 368 256zM336 256c0 44.13-35.89 80-80 80S176 300.1 176 256S211.9 176 256 176S336 211.9 336 256z"
                        />
                    </svg>
                    <span>Light</span>
                </div>
                <div
                    className="flex cursor-pointer items-center space-x-2 p-2 text-sm transition-colors hover:bg-slate-100 hover:dark:bg-neutral-800"
                    onClick={setDarkMode}
                    ref={darkModeElement}
                >
                    <svg className="h-4 w-4" viewBox="0 0 512 512">
                        <path
                            className="fill-current"
                            d="M322.1 401.4l-4.688 .375c-7.594 1.5-15.41 2.25-23.16 2.25c-67 0-121.5-54.66-121.5-121.8c0-43.75 23.66-84.38 61.72-106.1C243.3 171 248 161.2 246.3 151C244.5 140.8 237 133.1 226.1 131.3C215.3 129.1 203.2 127.1 191.7 127.1C85.92 127.1 0 214.1 0 320s86.01 192 191.8 192c58.19 0 112.6-26.04 148.9-71.04c6.062-7.25 7.275-16.99 3.275-25.52C340 406.9 331.4 401.4 322.1 401.4zM191.8 480C103.7 480 32 408.2 32 320s71.69-160 159.8-160c2.938 0 5.906 .0938 8.875 .25C163.3 189.2 140.7 234.2 140.7 282.2c0 84.84 68.88 153.8 153.5 153.8c2.625 0 5.25-.0625 7.844-.1875C272.6 464.1 233.4 480 191.8 480zM496 208h-32v-32C464 167.2 456.8 160 448 160s-16 7.156-16 16v32h-32C391.2 208 384 215.2 384 224s7.156 16 16 16h32v32C432 280.8 439.2 288 448 288s16-7.156 16-16v-32h32C504.8 240 512 232.8 512 224S504.8 208 496 208zM432 96c0-8.844-7.156-16-16-16h-64v-64C352 7.156 344.8 0 336 0S320 7.156 320 16v64h-64C247.2 80 240 87.16 240 96S247.2 112 256 112h64v64C320 184.8 327.2 192 336 192S352 184.8 352 176v-64h64C424.8 112 432 104.8 432 96z"
                        />
                    </svg>
                    <span>Dark</span>
                </div>
                <div
                    className="flex cursor-pointer items-center space-x-2 p-2 text-sm transition-colors hover:bg-slate-100 hover:dark:bg-neutral-800"
                    onClick={setSystemMode}
                    ref={systemModeElement}
                >
                    <svg className="h-4 w-4" viewBox="0 0 576 512">
                        <path
                            className="fill-current"
                            d="M512 0H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h149.7l-19.2 64H144C135.2 480 128 487.2 128 496S135.2 512 144 512h288c8.836 0 16-7.164 16-16S440.8 480 432 480h-50.49l-19.2-64H512c35.35 0 64-28.65 64-64V64C576 28.65 547.3 0 512 0zM227.9 480l19.2-64h81.79l19.2 64H227.9zM544 352c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V288h512V352zM544 256H32V64c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32V256z"
                        />
                    </svg>
                    <span>System</span>
                </div>
                <div
                    className="invisible -top-[0.1875rem] h-1.5 w-1.5 bg-inherit before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit group-hover:before:visible"
                    ref={tooltip.setArrowElement}
                    style={tooltip.popper.styles.arrow}
                />
            </div>
        </div>
    );
}

export default DarkModeToggler;
