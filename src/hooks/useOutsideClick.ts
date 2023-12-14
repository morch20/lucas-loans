import { useRef, useEffect } from "react";

const useOutsideClick = (callback: Function, dependencies: any) => {
    const ref = useRef<any>();

    useEffect(() => {
        const validateDependencies = (event: Event) => {
            if (dependencies === undefined) return true;

            let flag = true;

            for (let i = 0; i < dependencies.length; i++) {
                if (dependencies[i].current.contains(event.target)) {
                    flag = false;
                    break;
                }
            }

            return flag;
        };

        const handleClick = (event: Event) => {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                validateDependencies(event)
            ) {
                callback();
            }
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, [callback, dependencies, ref]);

    return ref;
};

export default useOutsideClick;
