import Image from "next/image";

export type StepProps = {
    index: number;
    step: {
        title: string;
        description: string;
        imageUrl: string;
    };
};
export default function Step({ index, step }: StepProps) {
    return (
        <div className="bg-white w-full max-w-6xl h-[400px] md:h-[250px] lg:h-[200px] shadow-md rounded-lg flex flex-col-reverse md:flex-row justify-between overflow-clip">
            <div className="h-full w-full md:w-4/6 lg:w-3/5 p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full mr-4 h-8 w-8 md:h-12 md:w-12 flex items-center justify-center md:text-lg font-bold">
                        {index}
                    </div>
                    <h2 className=" text-xl md:text-2xl font-semibold text-tertiary w-5/6 ">
                        {step.title}
                    </h2>
                </div>
                <p className="text-gray-700">{step.description}</p>
            </div>
            <div className=" h-2/5 md:h-full w-full md:w-2/6 lg:w-1/4 bg-tertiary flex items-center justify-center">
                <Image
                    className="w-3/4 h-3/4"
                    src={step.imageUrl}
                    alt={step.title}
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
}
