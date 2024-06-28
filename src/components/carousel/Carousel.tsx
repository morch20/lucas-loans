"use client";

import {
    createContext,
    useContext,
    useReducer,
    ReactNode,
    Dispatch,
} from "react";

type State = {
    keys: {
        key: string;
        validationValues: any[];
        validation: (args: any[]) => boolean;
    }[];
    currentIndex: number;
};

type Action =
    | { type: "increment" }
    | { type: "decrement" }
    | {
          type: "setIndex";
          key: string;
          validation: () => boolean;
          validationValues: any[];
      }
    | {
          type: "changeValidationValues";
          keyword: string;
          validation: (args: any[]) => boolean;
          validationValues: any[];
      };

type CarouselContextType = {
    state: State;
    dispatch: Dispatch<Action>;
};

// Create the context with a default value
const CarouselContext = createContext<CarouselContextType | undefined>(
    undefined
);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            if (state.currentIndex >= state.keys.length - 1) return state;

            const validationValues =
                state.keys[state.currentIndex].validationValues;
            if (!state.keys[state.currentIndex].validation(validationValues))
                return state;
            return { ...state, currentIndex: state.currentIndex + 1 };

        case "decrement":
            if (state.currentIndex <= 0) return state;
            return { ...state, currentIndex: state.currentIndex - 1 };

        case "setIndex":
            // if (state.currentIndex > 0) return state;
            if (state.keys.find((current) => current.key === action.key)) {
                console.warn(
                    "Key '" +
                        action.key +
                        "' already exists.\n If all your keys are unique, you can ignore this warning in development."
                );
                return state;
            }

            const setIndexKeys = state.keys;
            setIndexKeys.push({
                key: action.key,
                validation: action.validation,
                validationValues: action.validationValues,
            });
            return {
                ...state,
                keys: setIndexKeys,
            };

        case "changeValidationValues":
            for (let i = 0; i < state.keys.length; i++) {
                const element = state.keys[i];
                if (element.key === action.keyword) {
                    state.keys[i] = {
                        key: element.key,
                        validation: action.validation,
                        validationValues: action.validationValues,
                    };
                    break;
                }
            }
            return state;
        default:
            throw new Error("Unknown action type");
    }
};

function CarouselProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {
        keys: [],
        currentIndex: 0,
    });

    return (
        <CarouselContext.Provider value={{ state, dispatch }}>
            {children}
        </CarouselContext.Provider>
    );
}

export default function Carousel({ children }: { children: ReactNode }) {
    return <CarouselProvider>{children}</CarouselProvider>;
}

export function useCarouselContext() {
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error(
            "useCarouselContext must be used within a CarouselProvider"
        );
    }
    return context;
}
