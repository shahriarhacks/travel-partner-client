import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Travel Partner `;
  }, [title]);
};

export default useTitle;
