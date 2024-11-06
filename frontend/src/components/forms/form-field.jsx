/* eslint-disable react/prop-types */

const FormField = ({
    name,
    label,
    type,
    placeholder = "",
    register,
    error,
    ...props
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className={`block font-medium leading-6 ${error ? "text-error" : "text-gray-900"}`}
            >
                {label}
            </label>

            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                {...register(name)}
                className={`mt-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ${error ? "ring-error" : "ring-gray-300"} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${error ? "focus:ring-error" : "focus:ring-primary"} disabled:cursor-not-allowed disabled:opacity-50 sm:leading-6`}
                {...props}
            />

            {error && <p className="mt-2 text-error">{error.message}</p>}
        </div>
    );
};

export default FormField;
