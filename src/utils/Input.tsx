function Input({ inputType, placeholder, required, isTextBox }: any) {
  return (
    <div className="flex bg-gray-2 w-56 md:w-72 my-2">
      {isTextBox ? (
        <textarea
          placeholder={placeholder}
          className="px-4 py-1 text-gray-9 bg-gray-2 w-72"
          required={required}
        ></textarea>
      ) : (
        <input
          type={inputType}
          placeholder={placeholder}
          className="px-4 py-1 text-gray-9 bg-gray-2 w-72"
          required={required}
        />
      )}
    </div>
  );
}

export default Input;
