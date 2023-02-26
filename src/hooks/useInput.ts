import { useCallback, useState } from "react";

function useInput<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({ ...prev, [name]: inputValue }));
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return { value, setValue, onChange, reset };
}

export default useInput;
