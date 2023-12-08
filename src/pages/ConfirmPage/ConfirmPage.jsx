import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "@/redux/auth/auth-operations";

const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmailAndRedirect = async () => {
      try {
        const currentUrl = window.location.href;
        const code = getCodeFromUrl(currentUrl);

        if (code) {
          await dispatch(verifyUser({ hash: code }));
          navigate("/");
        }
      } catch (error) {
        console.error("Помилка при підтвердженні пошти:", error);
      }
    };

    confirmEmailAndRedirect();
  }, [dispatch, navigate]);

  const getCodeFromUrl = url => {
    const urlParts = url.split("/");
    const code = urlParts[urlParts.length - 1];
    return code;
  };

  return <p>Перевірка верифікації, зачекайте...</p>;
};
export default ConfirmationPage;
